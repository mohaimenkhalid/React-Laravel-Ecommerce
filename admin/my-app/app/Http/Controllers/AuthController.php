<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'error' => 'Invalid login credentials.'
            ]);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('Login Token')->accessToken;

        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request) {
        $token = Auth::guard("api")->user()->token();
        if($token->revoke()) {
            return response()->json(['status' => true]);
        }
        return response()->json(['status' => false]);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:4',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('Login Token')->accessToken;

        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'Bearer',
        ]);
    }

    public function socialLogin(Request $request) {

        $response = $request->socialAuthResponse;
        $user = User::where(['email' => $response['email']])->first();

        if(empty($user)) {
            $user = new User();
            $user->first_name = $response['givenName'];
            $user->last_name = $response['familyName'];
            $user->email = $response['email'];
            $user->social_auth_service = $request->socialAuthService;
            $user->social_auth_id = $response['googleId'];
            $user->save();
        } else {
            if(empty($user->social_auth_service && $user->social_auth_id)) {
                $user->social_auth_service = $request->socialAuthService;
                $user->social_auth_id = $response['googleId'];
                $user->save();
            }
        }

        $token = $user->createToken('Login Token With Google')->accessToken;

        return response()->json([
            'access_token' => $token,
            'user' => $user,
            'token_type' => 'Bearer',
        ]);
    }
}
