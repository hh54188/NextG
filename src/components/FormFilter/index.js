import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

const FormFilter = () => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
        <Form.Select fluid label="Gender" options={[]} placeholder="Gender" />
        <Form.Field>
          <label>First Name</label>
          <Checkbox toggle style={{ position: "relative", top: 10 }} />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default FormFilter;
