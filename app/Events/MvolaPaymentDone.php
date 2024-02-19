<?php

namespace App\Events;

use App\Models\Payment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MvolaPaymentDone implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private  $payment;

    public function __construct($payment)
    {
      $this->payment = $payment;
    }

    public function broadcastOn()
    {
        return [
            // "payment"
           new Channel("payment" )
        ];
    }

    public function broadcastWith(){
        return ["data" => $this->payment];
    }
}
