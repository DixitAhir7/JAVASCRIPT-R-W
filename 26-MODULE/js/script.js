/*
* it imports all exported functions from module
 you can import as defined function name too
*/

// * it is called alias

// import * as fun from './function.js';
import { addDetail } from './function.js';
import * as user from '../import-m/import.js';

// fun.addDetail()  
addDetail()

user.addUser()