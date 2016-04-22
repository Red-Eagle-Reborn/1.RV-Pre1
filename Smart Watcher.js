function modTick() {
	var time = Level.getTime();
	var hours = Math.floor(time/1000);
	var minutes = (time % 1000) / 1000 * 60;
	clientMessage("Time: " + hours + ":" + minutes + "Ticks = " + time);
}
