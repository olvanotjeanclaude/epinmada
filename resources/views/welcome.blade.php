<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Epin mada</title>
</head>

<body>
    <p>Epin mada service</p>

    <script>
        const event = new EventSource("/api/stream");

        // console.log(event)
        // event.onmesssage = event => {
        //     const data = JSON.parse(event.data);
        //     console.log(data);
        // }
    </script>
</body>

</html>
