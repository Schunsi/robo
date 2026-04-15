music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
led.plotBarGraph(
1,
5
)
led.plot(4, 3)
music.play(music.stringPlayable("B - E - G - F - ", 120), music.PlaybackMode.UntilDone)
led.unplot(0, 0)
led.plotBarGraph(
2,
7
)
led.unplot(4, 4)
led.plotBarGraph(
0,
0
)
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
