<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\User;
use App\Activity;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Activity as ActivityResource;

class Cart extends JsonResource
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
            'id'                => $this->id,
            'id_user'           => $this->id_user,
            'id_activity'       => $this->id_activity,
            'date'              => $this->date,
            'number_of_person'  => $this->number_of_person,
            'user'              => new UserResource(User::find($this->id_user)),
            'activity'          => new ActivityResource(Activity::find($this->id_activity)),
        ];
    }
}
