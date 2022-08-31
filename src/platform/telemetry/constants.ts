// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

'use strict';

export enum EventName {
    EXTENSION_LOAD = 'EXTENSION.LOAD',
    PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES = 'PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES',
    ENVFILE_VARIABLE_SUBSTITUTION = 'ENVFILE_VARIABLE_SUBSTITUTION',
    ENVFILE_WORKSPACE = 'ENVFILE_WORKSPACE',
    HASHED_PACKAGE_NAME = 'HASHED_PACKAGE_NAME',
    HASHED_PACKAGE_PERF = 'HASHED_PACKAGE_PERF',

    OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST = 'OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_REQUEST_EX',
    OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR = 'OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_ERROR_EX',
    OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS = 'OPEN_DATAVIEWER_FROM_VARIABLE_WINDOW_SUCCESS_EX'
}

export enum CheckboxState {
    Checked = 'checked',
    Unchecked = 'unchecked'
}

export enum SliceOperationSource {
    Dropdown = 'dropdown',
    TextBox = 'textbox',
    Checkbox = 'checkbox'
}
