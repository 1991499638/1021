import * as React from 'react';
import { Datagrid, EmailField, List, TextField, Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


export const UsersCreate = () => (
    <Create>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users" /> */}
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
);

export const UserList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);