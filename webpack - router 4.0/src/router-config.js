import ReactDOM from 'react';

import {Redirect} from 'react-router';//Redirect 重定向
import BasicRouting from './Modules/BasicRouting';
import Blocking from './Modules/Blocking';
import Miss from './Modules/Miss';
import NoMatch from './Modules/NoMatch';
import QueryParams from './Modules/QueryParams';
import Recursive from './Modules/Recursive';

module.exports=[
  
    {
        'path':'/basic-routing',
        'component':BasicRouting,
    },{
        'path':'/blocking',
        'component':Blocking,
    },{
        'path':'/miss',
        'component':Miss,
    },{
        'path':'/query-params',
        'component':QueryParams,
    },{
        'path':'/recursive',
        'component':Recursive,
    },{
        'path':'/query-params',
        'component':QueryParams,
    },{
        'path':'/miss',
        'component':Miss,
    }
]