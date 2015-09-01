#pragma strict

var resolution: int = 1000;

private var acc: ParticleSystem.Particle[];

function Start () {
	acc = new ParticleSystem.Particle[resolution];
	
	var increment = 4.0 / (resolution - 1);
	for (var i = 0; i < resolution; i++) {
		var t = i * increment;
		acc[i].position = new Vector3(t, 0.0, 0);
		acc[i].color = new Color(0, 1, 0);
		acc[i].size = 0.02;
	}
}

function Update () {
	for (var i = 1; i < resolution; i++) {
		acc[i - 1].position.y = acc[i].position.y;
	}
	acc[resolution - 1].position.y = Input.gyro.userAcceleration.y;
		
	particleSystem.SetParticles(acc, acc.Length);
}