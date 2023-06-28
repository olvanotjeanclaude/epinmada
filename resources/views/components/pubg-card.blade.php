<pubg-card>
    <h3 class="product__details--info__title text-center text-sm-start mb-15">
        {{ Str::upper($epin->name) }}
    </h3>

    <img src="{{ getImage($epin->image_url) }}" class="img img-fluid" alt="">
    <br>
    <div class="product__details--info">
        <form action="#">
            <x-pubg-info :epin="$epin" />
        </form>
    </div>
</pubg-card>
