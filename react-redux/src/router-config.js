import ReactDOM from 'react';

import {Redirect} from 'react-router';//Redirect 重定向
import BasicRouting from './Modules/BasicRouting';
import Blocking from './Modules/Blocking';
import Miss from './Modules/Miss';
import NoMatch from './Modules/NoMatch';
import QueryParams from './Modules/QueryParams';
import Recursive from './Modules/Recursive';
import Counter from './Modules/Counter';
import Carts from './Modules/Carts';
import BlockList from './Modules/blockList';//./modules.index(模块配置)
import ProductIntro from './Modules/ProductIntro';

module.exports=[
  
    {
        'path':'/basic-routing',
        'component':BasicRouting
    },{
        'path':'/blocking',
        'component':Blocking
    },{
        'path':'/miss',
        'component':Miss
    },{
        'path':'/query-params',
        'component':QueryParams
    },{
        'path':'/recursive',
        'component':Recursive
    },{
        'path':'/counter',
        'component':Counter
    },{
        'path':'/carts',
        'component':Carts
    },{
        'path':'/blockList',
        'component':BlockList
    },{
        'path':'/product-intro',
        'component':ProductIntro
    }
]