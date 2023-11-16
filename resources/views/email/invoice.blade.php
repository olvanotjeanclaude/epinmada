<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template email</title>

    <style>
        html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .card {
            background-color: #f4f4f4;
            padding-top: 40px;
            padding-bottom: 60px;
        }

        .card-body {
            margin: auto;
            padding: .5rem;
            max-width: 600px;
            background: #fff;
        }

        .invoice-title {
            font-size: .8rem;
            border-bottom: 1px solid lightgray;
            margin-bottom: 1rem;
        }

        .invoice-title th,
        .invoice-title td,
        .information th,
        .information td {
            border: none;
            padding: 0
        }

        h3 {
            margin-bottom: .9rem;
        }

        .information div {
            margin-top: .4rem;
        }


        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        tfoot td {
            font-weight: bold;
        }

        h1,
        h2,
        h3,
        table {
            margin: 0;
        }

        @media (max-width: 576px) {

            /* xs - Extra Small devices */
            .invoice-title,
            body {
                font-size: .65rem;
            }
        }

        @media (min-width: 576px) and (max-width: 768px) {

            /* sm - Small devices */
            .invoice-title,
            body {
                font-size: .8rem;
            }
        }
    </style>
</head>

<body>
    <div class="card">
        <div class="card-body">
            <table class="invoice-title">
                <tr>
                    <td style="padding-bottom: 10px">
                        <h2>#{{ $sale->unique_id }}</h2>
                    </td>
                    <td style="padding-bottom: 10px">
                        <h2 style="text-align: right;">{{ format_date_time($sale->created_at) }}</h2>
                    </td>
                </tr>
            </table>

            <table class="information">
                <tr>
                    <td>
                        <h3>Facturé à</h3>
                        <div>{{ Str::title($sale->customer->full_name) }}</div>
                        <div style="text-decoration: none;">{{ $sale->customer->email }}</div>
                        <div>{{ $sale->customer->phone }}</div>
                    </td>
                    <td style="text-align: end; vertical-align: top;">
                        <h3>Payement</h3>
                        <div>{{ camelToCapitalized($sale->payment_mode) }}</div>
                    </td>
                </tr>
            </table>


            <br>

            <h3 style="margin-bottom: .5rem;">Commandes</h3>
            <table>
                <thead>
                    <tr>
                        {{-- <th style="width: 70px;">No.</th> --}}
                        <th>Produit</th>
                        <th style="text-align: center">Qté</th>
                        <th style="text-align: end">Montant</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($sale->orders as $order)
                        <tr>
                            {{-- <td>{{ $order->product->unique_id }}</td> --}}
                            <td>{{ Str::upper($order->Product->name) }}</td>
                            <td style="text-align: center">{{ $order->quantity }}</td>
                            <td style="white-space: nowrap; text-align:end">{{ formatPrice($order->sub_amount,"Ar") }}</td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" style="text-align: end;">Total : {{ $sale->formatted_amount }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</body>

</html>
