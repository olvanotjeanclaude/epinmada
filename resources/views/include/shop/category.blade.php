<div class="single__widget widget__bg">
    <h2 class="widget__title position__relative h3">Categories</h2>
    <ul class="widget__categories--menu">
        @foreach ($categories as $category)
            <li class="widget__categories--menu__list">
                <a href="{{ route('front.getProducts', $category->slug) }}">
                    <label class="widget__categories--menu__label d-flex align-items-center">
                        <img class="widget__categories--menu__img" src="assets/img/product/small-product1.webp"
                            alt="categories-img">
                        <span class="widget__categories--menu__text">
                            {{ $category->name }}
                        </span>
                    </label>
                </a>
            </li>
        @endforeach
    </ul>
</div>
