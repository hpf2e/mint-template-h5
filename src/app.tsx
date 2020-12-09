import React, {ReactElement} from 'react';
import {Switch} from 'react-router-dom';

import routes, {RouteWithSubRoutes} from './routes';

export default (): ReactElement => (
	<Switch>
		{routes.map((route, i) => (
			<RouteWithSubRoutes key={i} {...route} />
		))}
	</Switch>
);
