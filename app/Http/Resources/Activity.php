<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Category;
use App\Type;
use App\City;
use App\Region;
use App\Country;
use App\Http\Resources\Category as CategoryResource;
use App\Http\Resources\Type as TypeResource;
use App\Http\Resources\City as CityResource;
use App\Http\Resources\Region as RegionResource;
use App\Http\Resources\Country as CountryResource;

class Activity extends JsonResource
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
            'id_category'       => $this->id_category,
            'id_type'           => $this->id_type,
            'id_city'           => $this->id_city,
            'id_region'         => $this->id_region,
            'id_country'        => $this->id_country,
            'name'              => $this->name,
            'description'       => $this->description,
            'amount'            => $this->amount,
            'image1_location'   => $this->image1_location,
            'image2_location'   => $this->image2_location,
            'image3_location'   => $this->image3_location,
            'start'             => $this->start,
            'end'               => $this->end,
            'number_of_persons' => $this->number_of_persons,
            'category'          => new CategoryResource(Category::find($this->id_category)),
            'type'              => new TypeResource(Type::find($this->id_type)),
            'city'              => new CityResource(City::find($this->id_city)),
            'region'            => new RegionResource(Region::find($this->id_region)),
            'country'           => new CountryResource(Country::find($this->id_country)),
        ];
    }
}
