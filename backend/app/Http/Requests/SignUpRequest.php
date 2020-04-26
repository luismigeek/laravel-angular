<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => '¿Cómo te llamas?',
            'email.required'  => '¿Cuál es tu correo electrónico?',
            'email.email'  => 'Introduce un correo electrónico valido',
            'email.unique'  => 'El correo electrónico ingresado ya se encuentra registrado',
            'password.required'  => 'Introduce una contraseña, la necesitaras para acceder a tu cuenta',
            'password.confirmed'  => 'Las contraseñas ingresadas no concuerdan',
        ];
    }
}
