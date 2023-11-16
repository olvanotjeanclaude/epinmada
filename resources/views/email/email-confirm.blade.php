<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation d'Email - EPIN MADA</title>
    <style>
        html,
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        #main {
            background-color: #f4f4f4;
            width: 100%;
            padding: 60px 0;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }


        h1 {
            color: #333;
        }

        p {
            color: #666;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            background-color: #4caf50;
            color: #fff;
            border-radius: 4px;
        }

        .btn:visited,
        .btn:hover,
        .btn:link {
            color: #fff;
        }

        .logo {
            margin: 1rem;
            max-width: 250px;
            text-align: center;
        }

        @media screen and (max-width: 768px) {
            .container {
                margin: 5px;
            }
        }
    </style>
</head>

<body>
    <div id="main">
        <div class="container">
            <center>
                <img class="logo" src="https://www.suaresoft.com/wp-content/uploads/2019/06/Suaresoft-2.png"
                    alt="">
            </center>

            <h3 style="text-align: center">Salut {{ Str::title($user->full_name) }},</h3>

            <p>Merci de rejoindre EPIN MADA !</p>
            <p>Veuillez confirmer votre adresse e-mail :</p>

            <a style="color: #fff" href="{{ route('auth.confirmToken', $user->confirmation_token) }}" class="btn">
                Confirmer l'adressee-mail
            </a>

            <p>Si le bouton ci-dessus ne fonctionne pas, copiez simplement le lien ci-dessous et collez-le dans votre
                navigateur :</p>
            <p>
                <a href="{{ route('auth.confirmToken', $user->confirmation_token) }}">
                    {{ route('auth.confirmToken', $user->confirmation_token) }}
                </a>
            </p>
            <p>Si vous ne pouvez pas confirmer votre adresse e-mail, envoyez-nous un e-mail à l'adresse suivante :
                <a href="mailto:{{ env('MAIL_USERNAME') }}">{{ env('MAIL_USERNAME') }}</a>, et nous serons ravis de vous
                aider.
            </p>
            <p>Si vous avez d'autres questions, envoyez-nous un e-mail à l'adresse suivante :
                <a href="mailto:{{ env('MAIL_USERNAME') }}">
                    {{ env('MAIL_USERNAME') }}
                </a>
            </p>
            <p>Merci de nous avoir choisis,</p>
            <p>L'équipe EPIN MADA</p>
        </div>
    </div>
</body>

</html>
