<?php

namespace App\Console\Commands;

use App\Mail\InvoiceOfProduct;
use App\Models\Sale;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class TestEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to test sending mail';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $invoice = new InvoiceOfProduct(Sale::first());
             Mail::to("olvanotjeanclaude@gmail.com")->send($invoice);
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
        }
    }
}
