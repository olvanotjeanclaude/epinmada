<div class="single__widget widget__bg">
    <h2 class="widget__title position__relative text-capitalize h3">Le produit le plus apprécié</h2>
    <div class="product__sidebar">
        @foreach ($tops as $top)
            <div class="small__product d-flex align-items-center mb-20">
                <div class="small__product--thumbnail position__relative">
                    <a class="small__product--link display-block" href="product-details.html">
                        <img class="small__product--img display-block" src="{{ $top->image_url }}" alt="product-img">
                    </a>
                </div>
                <div class="small__product--content">
                    <h3 class="small__product--title h4">
                        <a href="{{ $top->route_detail }}">{{ $top->name }}</a>
                    </h3>
                    <div class="small__product--price">
                        <span class="current__price">{{ $top->formatted_price }}</span>
                        {{-- <span class="price__divided"></span>
                        <span class="old__price"> $356</span> --}}
                    </div>
                    {{-- <ul class="rating small__product--rating d-flex">
                        <li class="rating__list">
                            <span class="rating__list--icon">
                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105"
                                    height="11.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li class="rating__list">
                            <span class="rating__list--icon">
                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105"
                                    height="11.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li class="rating__list">
                            <span class="rating__list--icon">
                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105"
                                    height="11.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li class="rating__list">
                            <span class="rating__list--icon">
                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105"
                                    height="11.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li class="rating__list">
                            <span class="rating__list--icon">
                                <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="11.105"
                                    height="11.732" viewBox="0 0 10.105 9.732">
                                    <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                </svg>
                            </span>
                        </li>
                        <li class="rating__list"><span class="rating__list--text">( 5.0)</span></li>
                    </ul> --}}
                </div>
            </div>
        @endforeach
    </div>
</div>
