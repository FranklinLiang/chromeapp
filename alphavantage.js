var url_base = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";
var ticker = "SPY";
var oldTicker = "SPY";
var url_end = "&interval=1min&apikey=6W7XPXYLEGNTFXPV";
$(document).ready(function() {

  // Load ticker
  if (localStorage.getItem("ticker") != null){
    ticker = localStorage.getItem("ticker");
  }else{
    localStorage.setItem("ticker", "SPY");
  }

  oldTicker = ticker;

  $("#ticker_button").click(function(){
    var value = document.getElementById("ticker_input").value;
    ticker = value;
    localStorage.setItem("ticker", value);
    update();
  });

  update();
});

function update(){
  $("#stockIndicator").show();
  doAjax(url_base + ticker + url_end);

  $('.ajaxtrigger').click(function() {
    $("#stockIndicator").show();
    doAjax(url_base + ticker + url_end);
    return false;
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }

  function doAjax(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      contentType: "application/json",
      success: function(data) {

        if (!data.hasOwnProperty('Error Message')){
          var symbol = data['Meta Data']['2. Symbol']
          var lastRefreshed = data['Meta Data']['3. Last Refreshed']
          var lastTradePriceOnly = data['Time Series (1min)'][lastRefreshed]['4. close']
          var lastVolume = data['Time Series (1min)'][lastRefreshed]['5. volume']

          $('#stockSymbol').html(symbol);
          $('#stockAsk').html(lastTradePriceOnly);
          $('#stockVolume').html(numberWithCommas(lastVolume));
          $("#stockIndicator").hide();

          oldTicker = ticker;
          
        }else{
          alert("Invalid symbol");
          $("#stockIndicator").hide();

          ticker = oldTicker;
          localStorage.setItem("ticker", ticker);
        }
      }
    });
  }
}
