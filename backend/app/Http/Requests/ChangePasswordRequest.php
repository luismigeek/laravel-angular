<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChangePasswordRequest extends FormRequest
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
            'email' => 'required|email',
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
            'email.required'  => '¿Cuál es tu correo electrónico?',
            'email.email'  => 'Introduce un correo electrónico valido',
            'password.required'  => 'Introduce una contraseña, la necesitaras para acceder a tu cuenta',
            'password.confirmed'  => 'Las contraseñas ingresadas no concuerdan',
        ];
    }
}
