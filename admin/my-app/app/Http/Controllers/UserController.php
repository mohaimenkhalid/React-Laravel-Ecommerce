<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use File;

class UserController extends Controller
{
    public function updateProfile(Request $request) {

        $user = User::find(auth()->user()->id);

        if(!empty($request->image) && $request->has('image')) {
            $filename = time().'.'.$request->image->getClientOriginalExtension();
            if(!File::exists(User::USER_PROFILE_UPLOAD_PATH)) {
                File::makeDirectory(User::USER_PROFILE_UPLOAD_PATH, 0755, true, true);
            }
            $request->image->move(User::USER_PROFILE_UPLOAD_PATH, $filename);

            if($request->old_image) {
                unlink(User::USER_PROFILE_UPLOAD_PATH.''.$request->old_image);
            }
            $user->image = $filename;
        }

        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->save();
        return response()->json(['user' => $user, 'message' => 'Profile updated successfully.']);
    }
}
