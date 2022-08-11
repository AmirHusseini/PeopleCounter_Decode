function Decode(fPort, bytes) {
    var params = {};

    // Device stats
    params.device_status = [10];
    params.battery = ((bytes[11] << 8) | bytes[12]) / 100;
    params.sensor_status = bytes[17];
    params.payload_counter = bytes[22];

    // There are separate counters for people travelling in each direction. These directions are marked on the units.
    // There are also running total counts (one for each direction), useful if some packets are lost.
    
    // Count of people travelling from counter_a to counter_b
    params.counter_a = (bytes[13] << 8) | bytes[14];
    params.total_counter_a = (bytes[18] << 8) | bytes[19];

	var d = new Date();
  	d.setHours(d.getHours());
  
    // Count of people travelling from counter_b to counter_a
    params.counter_b = (bytes[15] << 8) | bytes[16];
    params.total_counter_b = (bytes[20] << 8) | bytes[21];
  	params.payload_Counter = [22];
	params.Time = d.toLocaleString('YOUR COUNTRY', { timeZone: "YOUR TIMEZONE" });

    return params;
  }