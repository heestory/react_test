import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataTablesPage from "./pages/DataTablesPage";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tableDataReducer from "./reducers/tableDataReducer";

const store = createStore(tableDataReducer);


ReactDOM.render(
    <Provider store={store}>
    <DataTablesPage/>
    </Provider>,
document.getElementById('root'));

