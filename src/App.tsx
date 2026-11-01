
import {
  Button,
  TextInput,
  InlineNotification,
} from '@carbon/react';

function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Carbon Design System Test</h1>

      <p>
        Testing reusable enterprise UI components.
      </p>

      <TextInput
        id="username"
        labelText="Username"
        placeholder="Enter your username"
      />

      <div style={{ marginTop: '1rem' }}>
        <Button onClick={() => alert('Button clicked!')}>
          Submit
        </Button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <InlineNotification
          kind="success"
          title="Success"
          subtitle="Carbon components are working."
          hideCloseButton
        />
      </div>
    </main>
  );
}

export default App;
