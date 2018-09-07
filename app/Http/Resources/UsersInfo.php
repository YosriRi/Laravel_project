<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersInfo extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);

        // Préciser les champs à retourner
        // return [
        //     'id' => $this->id,
        //     'firstname' => $this->firstname,
        //     'lastname' => $this->lastname,
        //     'email' => $this->email,
        //     'password' => $this->password
        // ];
    }

    // Ajouter des données dans ma response json
    // public function with($request) {
    //     return [
    //         'version' => '1.0.0',
    //         'author' => 'SoExtreme'
    //     ];
    // }
}
