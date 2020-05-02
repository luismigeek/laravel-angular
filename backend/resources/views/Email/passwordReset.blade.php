@component('mail::message')
# Respuesta a recuperación de contraseña

Click en el siguiente boton para restablecer la contraseña

@component('mail::button', ['url' => 'http://localhost:4200/password-response-reset?token='.$token])
Restablecer contraseña
@endcomponent

Gracias,<br>
{{ config('app.name') }}
@endcomponent