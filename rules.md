# Architecture Rules

## Purpose

Maintain a scalable, feature-first Next.js App Router architecture.

The goals:

- Keep routing separate from UI.
- Keep UI separate from business logic.
- Keep data access separate from presentation.
- Optimize loading performance with progressive rendering.
- Keep features self-contained and easy to maintain.

---

# Core Principles

## Feature First

Organize code by feature/module instead of grouping everything by file type.

Related code should live together:

- UI
- Actions
- Data access
- Business logic
- Validation
- Types
- Constants

Avoid creating unnecessary global folders when code belongs to a specific feature.

---

# Folder Structure


app/
├── <feature>/
│ ├── page.tsx
│ ├── layout.tsx
│ ├── loading.tsx
│ ├── error.tsx
│ └── actions.ts

components/
├── ui/
│ └── Shared reusable UI components
│
└── <feature>/
├── <Feature>PageContent.tsx
├── <Feature> components
├── Forms
├── Tables
├── Dialogs
└── Skeletons

lib/
└── <feature>/
├── dal.ts
├── services.ts
├── actions.ts
├── schemas.ts
├── types.ts
└── constants.ts

utils/
├── Generic helper functions

hooks/
├── Reusable React hooks

types/
├── Global shared TypeScript types


---

# App Directory Rules

## app/

Purpose:

The routing layer only.

Contains:

- Routes
- Layouts
- Metadata
- Loading states
- Error boundaries
- Route handlers
- Route-specific Server Actions

`page.tsx` responsibilities:

- Export metadata.
- Handle route params.
- Handle authentication checks.
- Handle redirects.
- Render the feature page component.

`page.tsx` should NOT contain:

- Large JSX implementations.
- Database queries.
- Business logic.
- Complex UI.

Preferred pattern:

```tsx
export default function Page() {
  return <FeaturePageContent />;
}
Components Rules
components/

Purpose:

All React UI belongs here.

Structure:

components/
└── <feature>/
    ├── <Feature>PageContent.tsx
    ├── Header.tsx
    ├── Toolbar.tsx
    ├── DataView.tsx
    └── Skeleton.tsx

Components are responsible for:

Rendering UI.
Composing layouts.
Handling presentation logic.
User interactions.

Components should NOT:

Directly access databases.
Contain business rules.
Duplicate application logic.
Page Content Rules

Every feature page should have a page composition component.

Example:

components/<feature>/<Feature>PageContent.tsx

Responsibilities:

Compose the page.
Render static content immediately.
Place Suspense boundaries.
Coordinate feature components.

Example:

export function FeaturePageContent() {
  return (
    <>
      <Header />

      <Toolbar />

      <Suspense fallback={<TableSkeleton />}>
        <HeavyTable />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <Chart />
      </Suspense>
    </>
  );
}
Suspense Rules
Goal

Render static UI immediately and load heavy sections progressively.

Rules

Always:

Use Suspense around heavy async components.
Give each heavy component its own fallback.
Allow unrelated sections to load independently.
Create skeletons matching the component being loaded.

Never:

Wrap the entire page in one Suspense boundary by default.
Block the whole page because one component is slow.
Create one large loading state for unrelated sections.
Correct
<PageHeader />

<PageToolbar />

<Suspense fallback={<TableSkeleton />}>
  <LargeTable />
</Suspense>

<Suspense fallback={<ChartSkeleton />}>
  <Chart />
</Suspense>

Behavior:

Header appears immediately.
Toolbar appears immediately.
Table loads independently.
Chart loads independently.
Incorrect
<Suspense fallback={<PageSkeleton />}>
  <FeaturePageContent />
</Suspense>

Problem:

One slow component delays the entire page.

lib Rules
lib/

Purpose:

Application logic and feature logic.

Structure:

lib/<feature>/
dal.ts

Data Access Layer.

Contains:

Database queries.
API calls.
External data fetching.

Example:

getItems()
createItem()
updateItem()

Must NOT contain:

React code.
JSX.
UI logic.
services.ts

Business logic.

Contains:

Application rules.
Complex operations.
Data transformations.

Example:

createOrder()
calculatePermissions()
processPayment()
actions.ts

Server Actions.

Keep actions close to the feature that owns them.

Feature-specific:

lib/<feature>/actions.ts

Route-specific:

app/<feature>/actions.ts

Global actions:

app/actions/

Examples:

Authentication.
Uploads.
Notifications.

Do not create one giant actions folder containing unrelated feature actions.

schemas.ts

Validation.

Contains:

Zod schemas.
Input validation.
types.ts

Feature-specific TypeScript types.

Example:

export type Item = {
  id: string;
  name: string;
};
Utils Rules
utils/

Purpose:

Generic reusable helpers.

Examples:

Date formatting.
String formatting.
Currency formatting.
Class name helpers.

Rules:

Utilities:

Must not know about application features.
Must be reusable anywhere.
Must not contain business logic.

If a utility becomes feature-specific:

Move it to:

lib/<feature>/
Hooks Rules
hooks/

Contains reusable React hooks only.

Examples:

useDebounce()
useMediaQuery()
useLocalStorage()

Hooks should contain reusable React behavior.

Types Rules

Global types:

types/

Feature-specific types:

lib/<feature>/types.ts

Do not put feature-specific types in global types.

---

# Multi-Tab Feature Layout Pattern

Any feature that has multiple tabs/sections **must** use nested routes + a layout instead of client-side tab state.

## Structure

```
app/dashboard/<feature>/
  layout.tsx          ← Static shell: DashboardModuleShell + controls + tab strip. No data fetching.
  page.tsx            ← redirect to the default tab route (e.g. redirect("/dashboard/<feature>/overview"))
  overview/
    page.tsx          ← auth + params → <FeatureOverviewContent />
  transactions/
    page.tsx
  reports/
    page.tsx
  ...
```

## layout.tsx responsibilities

- Render `DashboardModuleShell` with title, description, breadcrumbs.
- Render any static controls (e.g. month/year picker) — URL-param-driven, no data needed.
- Render `<FeatureTabStrip />` — reads `usePathname()` to highlight the active tab.
- Wrap `{children}` — each child page streams in independently.
- **No data fetching. No async. No Suspense here.**

```tsx
// app/dashboard/budget/layout.tsx
export default function BudgetLayout({ children, params }) {
  return (
    <DashboardModuleShell
      title="Budget"
      controls={<BudgetMonthPicker year={...} month={...} />}
      navigation={<BudgetTabStrip />}
    >
      {children}
    </DashboardModuleShell>
  );
}
```

## Tab strip component

Lives in `components/<feature>/<Feature>TabStrip.tsx`. Client component (`"use client"`).
Uses `usePathname()` to determine the active tab — zero data needed.

```tsx
// components/budget/BudgetTabStrip.tsx
"use client";
const tabs = [
  { label: "Budget",       icon: Wallet,         href: "/dashboard/budget/overview" },
  { label: "Transactions", icon: ArrowRightLeft,  href: "/dashboard/budget/transactions" },
  ...
];
export function BudgetTabStrip() {
  const pathname = usePathname();
  return (
    <ButtonStrip>
      {tabs.map(tab => (
        <Link key={tab.href} href={tab.href} className={buttonStripItemClassName(pathname.startsWith(tab.href))}>
          <tab.icon /> {tab.label}
        </Link>
      ))}
    </ButtonStrip>
  );
}
```

## Page responsibilities

Each tab's `page.tsx`:
- Auth check (`getRequiredUserId()`).
- Parse URL params.
- Return `<FeatureTabContent />` — a server component with its own `<Suspense>`.

## Why

- Layout, controls, and tab strip render **before any DB query runs**.
- Each tab's data loads **independently** — navigating tabs is instant for cached tabs.
- Deep links and back/forward work for free.
- No client-side tab state, no `useEffect`, no `useState` for active tab.
- Aligns with App Router's streaming model.

## Rule

**Never use `useState` / `useEffect` to manage which tab is active.**
Use nested routes. The URL is the state.

---

# Adding A New Feature

When adding a new feature:

Create route:
app/<feature>/
Create UI:
components/<feature>/
Create application logic:
lib/<feature>/
Add data access:
lib/<feature>/dal.ts
Add validation:
lib/<feature>/schemas.ts
Add feature types:
lib/<feature>/types.ts
Add actions close to the feature.
Add Suspense boundaries around heavy components.
Add skeleton components for async sections.
File Placement Decision Rules

Ask:

Does it render React UI?

Place in:

components/
Is it a Next.js route file?

Place in:

app/
Does it access data?

Place in:

lib/<feature>/dal.ts
Does it contain business rules?

Place in:

lib/<feature>/services.ts
Is it validation?

Place in:

lib/<feature>/schemas.ts
Is it a feature type?

Place in:

lib/<feature>/types.ts
Is it a generic helper?

Place in:

utils/
Is it reusable React behavior?

Place in:

hooks/
Final Architecture Goals

The codebase should always maintain:

Thin route files.
Feature-based organization.
Small focused components.
Isolated business logic.
Independent loading states.
Progressive rendering.
Minimal duplication.
Clear ownership of every file.