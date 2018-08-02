<?php

namespace App\Http\Resources;

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
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'id_user' => $this->id_user,
            'id_activity' => $this->id_activity,
            'id_photos' => $this->id_photos,
            'activity_or_photo' => $this->activity_or_photo
        ];
    }
}
