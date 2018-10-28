<?php

namespace App\Http\Resources;

use App\User;
use App\Activity;
use App\Photo;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Activity as ActivityResource;
use App\Http\Resources\Photo as PhotoResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Comment extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'id_user'       => $this->id_user,
            'id_activity'   => $this->id_activity,
            'id_photo'      => $this->id_photo,
            'comment'       => $this->comment,
            'user'          => new UserResource(User::find($this->id_user)),
            'activity'      => new ActivityResource(Activity::find($this->id_activity)),
            'photo'         => new PhotoResource(Photo::find($this->id_photo)),
        ];
    }
}
