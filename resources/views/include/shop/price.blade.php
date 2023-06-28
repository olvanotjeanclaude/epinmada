<div class="single__widget price__filter widget__bg">
    <h2 class="widget__title position__relative h3">Filter By Price</h2>
    <form class="price__filter--form" action="#">
        <div class="price__filter--form__inner mb-15 d-flex align-items-center">
            <div class="price__filter--group">
                <label class="price__filter--label" for="Filter-Price-GTE1">From</label>
                <div class="price__filter--input border-radius-5 d-flex align-items-center">
                    <span class="price__filter--currency">$</span>
                    <input class="price__filter--input__field border-0" id="Filter-Price-GTE1" name="filter.v.price.gte"
                        type="number" placeholder="0" min="0" max="250.00">
                </div>
            </div>
            <div class="price__divider">
                <span>-</span>
            </div>
            <div class="price__filter--group">
                <label class="price__filter--label" for="Filter-Price-LTE1">To</label>
                <div class="price__filter--input border-radius-5 d-flex align-items-center">
                    <span class="price__filter--currency">$</span>
                    <input class="price__filter--input__field border-0" id="Filter-Price-LTE1" name="filter.v.price.lte"
                        type="number" min="0" placeholder="250.00" max="250.00">
                </div>
            </div>
        </div>
        <button class="price__filter--btn primary__btn" type="submit">Filter</button>
    </form>
</div>
