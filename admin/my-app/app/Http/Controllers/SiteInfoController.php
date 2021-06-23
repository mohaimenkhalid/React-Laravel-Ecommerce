<?php

namespace App\Http\Controllers;

use App\Models\SiteInfo;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    public function getSiteInfo() {
        $site_info = SiteInfo::all();
        return response()->json($site_info);
    }
}
