<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Admin;
use App\Http\Resources\Admin as AdminResource;

class AdminController extends Controller
{
    /**
 	* Connexion
 	**/
    public function login(Request $request)
    {
        $admin = Admin::where([
            ['email', '=', $request->email],
            ['password', '=', sha1($request->password)],
        ])->get();
        
        return new AdminResource($admin);
    }
}
