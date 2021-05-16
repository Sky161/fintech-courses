import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { Layout } from './ui/components/layout/layout.component';
import './ui/styles/global.css';
import { Routes } from './ui/components/routes.component';

ReactDOM.render(
	<React.StrictMode>
		<Layout>
			<Routes />
		</Layout>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
