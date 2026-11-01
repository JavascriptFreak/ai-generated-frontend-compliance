# T06 — Initial Component Scope

## 1. Purpose and Objective

Define a controlled set of IBM Carbon React components for evaluating design-system compliance and functional equivalence in AI-generated frontend code.

The scope establishes the supported component APIs, configurations, behavioral requirements, and compliance rules used to construct experimental tasks and evaluate generated implementations.

## 2. Environment and Carbon Version

| Setting | Value |
|---|---|
| Design system | IBM Carbon Design System |
| Framework | React |
| Package | `@carbon/react` |
| Installed version | `1.119.0` |
| Scope status | Initial API inspection completed; specification and runtime verification pending |

The installed package version will remain fixed throughout the experiment to ensure consistent evaluation conditions.

API inspection is based on the installed TypeScript declarations:

- `Button/Button.d.ts`
- `TextInput/TextInput.d.ts`
- `Checkbox/Checkbox.d.ts`

TypeScript declarations establish the available API surface but do not independently verify visual rendering, runtime behavior, accessibility, or conformity with official Carbon specifications.

## 3. Selected Components

The initial experimental scope includes three Carbon React components:

1. **Button** — evaluates component variants, sizes, activation, and disabled behavior.
2. **TextInput** — evaluates input properties, editing, validation, and read-only behavior.
3. **Checkbox** — evaluates checked states, toggling, and disabled behavior.

Components outside this list are excluded from the initial experiment.

## 4. Verified Component APIs

The following API information was recorded from the installed TypeScript declarations for `@carbon/react@1.119.0`.

### 4.1 Button

**Approved component:** Carbon React `Button`

**Declaration-confirmed `kind` values:**

- `primary`
- `secondary`
- `danger`
- `ghost`
- `danger--primary`
- `danger--ghost`
- `danger--tertiary`
- `tertiary`

**Declaration-confirmed `size` values:**

- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `2xl`

**Relevant properties:**

| Property | Verified information |
|---|---|
| `kind` | Optional; accepts `ButtonKind` or `IconButtonKind` when `hasIconOnly` applies |
| `size` | Optional; accepts `ButtonSize` |
| `disabled` | Inherited from React button attributes |
| `type` | Inherited from React button attributes |
| `onClick` | Inherited from React button attributes |
| `href` | Optional; supports link rendering |
| `hasIconOnly` | Optional; affects the applicable kind type |

The supported variants, sizes, and combinations must be cross-checked against the official Carbon Button specification.

### 4.2 TextInput

**Approved component:** Carbon React `TextInput`

**Relevant properties:**

| Property | Verified information |
|---|---|
| `id` | Required; `string` |
| `labelText` | Required; `ReactNode` |
| `value` | Optional; `string`, `number`, or `undefined` |
| `defaultValue` | Optional; `string` or `number` |
| `placeholder` | Optional; `string` |
| `disabled` | Optional; `boolean` |
| `readOnly` | Optional; `boolean` |
| `onChange` | Optional; receives `React.ChangeEvent<HTMLInputElement>` |
| `invalid` | Optional; `boolean` |
| `invalidText` | Optional; `ReactNode` |
| `warn` | Optional; `boolean` |
| `warnText` | Optional; `ReactNode` |
| `helperText` | Optional; `ReactNode` |
| `size` | Optional; `xs`, `sm`, `md`, or `lg` |
| `type` | Optional; `string` |
| `required` | Inherited from the underlying input attributes |

Controlled `value` and uncontrolled `defaultValue` configurations must be treated separately.

### 4.3 Checkbox

**Approved component:** Carbon React `Checkbox`

**Relevant properties:**

| Property | Verified information |
|---|---|
| `id` | Required; `string` |
| `labelText` | Required; `NonNullable<ReactNode>` |
| `checked` | Inherited from React input attributes |
| `defaultChecked` | Optional; `boolean` |
| `disabled` | Optional; `boolean` |
| `indeterminate` | Optional; `boolean` |
| `invalid` | Optional; `boolean` |
| `invalidText` | Optional; `ReactNode` |
| `warn` | Optional; `boolean` |
| `warnText` | Optional; `ReactNode` |
| `helperText` | Optional; `ReactNode` |
| `onChange` | Optional; receives an event and `{ checked: boolean; id: string }` |

Controlled `checked` and uncontrolled `defaultChecked` configurations must be treated separately.

Although `indeterminate` exists in the installed API, its behavior is excluded from the core experiment unless explicitly added and verified.

## 5. Behavioral Requirements

The following requirements define the expected behavior for experimental tasks.

### 5.1 Button

- Mouse and keyboard activation invoke the action specified by the scenario.
- Disabled buttons do not invoke the associated action.
- Buttons are keyboard-accessible and expose an appropriate accessible name.
- The required Carbon Button implementation is used.
- Button type and activation behavior match the specified use case.
- Focus and disabled behavior satisfy the scenario requirements.

### 5.2 TextInput

- Enabled inputs accept and allow editing of text.
- Read-only inputs display their current values without permitting modification.
- Disabled inputs prevent user editing.
- Invalid inputs communicate the specified validation error.
- Each input has an accessible name.
- Controlled inputs display the supplied value and handle changes according to the component contract.
- Required-field behavior and validation feedback are tested when specified by the scenario.
- Placeholder text does not replace a required accessible label.

### 5.3 Checkbox

- Enabled checkboxes can be toggled using a mouse or keyboard.
- The displayed checked state reflects the component's current state.
- Disabled checkboxes cannot be toggled through user interaction.
- Each checkbox has an accessible name.
- State changes follow the documented controlled or uncontrolled behavior.
- Indeterminate behavior is tested only if explicitly included in the finalized scope.

## 6. Design-System Compliance Rules

Each evaluated implementation must follow these rules:

1. **Approved component usage:** Required components must use the approved Carbon React implementation.
2. **API correctness:** Properties and values must be supported by `@carbon/react@1.119.0`.
3. **No custom replacements:** Required Carbon components must not be replaced by custom HTML elements or independently implemented substitutes.
4. **Design-value constraints:** Hardcoded design values are violations only when an explicit, documented rule prohibits them.
5. **Behavior preservation:** Required interactions, UI states, and accessibility behavior must match the test scenario.
6. **Independent evaluation:** Structural compliance and functional equivalence must be evaluated separately.
7. **Uncertainty handling:** Cases that cannot be classified reliably must be marked uncertain and referred for manual review.
8. **Version consistency:** All implementations must use the same pinned package version, scope definition, and evaluation rules.
9. **Traceability:** Every evaluation result must be traceable to the applicable requirement, rule, test scenario, and software version.

Structural compliance evaluates adherence to component, API, and explicit design-value rules. Functional equivalence evaluates whether the required behavior and accessibility are preserved.

An implementation can be structurally non-compliant while preserving the required behavior, or structurally compliant while failing a behavioral requirement.

## 7. Scope Exclusions and Limitations

The initial experiment excludes:

- Components outside Button, TextInput, and Checkbox.
- Custom implementations used in place of required Carbon components.
- Unsupported or unspecified component properties and variants.
- Automated repair as a primary evaluation objective.
- Pixel-perfect visual similarity as a primary compliance criterion.
- Indeterminate Checkbox behavior unless explicitly added with a documented test scenario.
- Interaction scenarios and API properties that have not been documented and verified.
- Automatic violation classification when the available evidence is insufficient.

The current scope is based on installed declaration inspection. Official specification checks, runtime interaction tests, accessibility verification, and experimental scenario definitions remain outstanding.


