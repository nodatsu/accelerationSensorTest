#pragma strict

var resolution: int = 1000;

private var accX: ParticleSystem.Particle[];
private var accY: ParticleSystem.Particle[];
private var accZ: ParticleSystem.Particle[];

function Start () {
	accX = new ParticleSystem.Particle[resolution];
	accY = new ParticleSystem.Particle[resolution];
	accZ = new ParticleSystem.Particle[resolution];
	
	var increment = 4.0 / (resolution - 1);
	for (var i = 0; i < resolution; i++) {
		var t = i * increment;
		accX[i].position = new Vector3(t, 0.0, 0);
		accY[i].position = new Vector3(t, 0.5, 0);
		accZ[i].position = new Vector3(t, 1.0, 0);
		accX[i].color = new Color(1, 0, 0);
		accY[i].color = new Color(0, 1, 0);
		accZ[i].color = new Color(0, 0, 1);
		accX[i].size = 0.02;
		accY[i].size = 0.02;
		accZ[i].size = 0.02;
	}
}

function Update () {
	for (var i = 1; i < resolution; i++) {
		accX[i - 1].position.y = accX[i].position.y;
		accY[i - 1].position.y = accY[i].position.y;
		accZ[i - 1].position.y = accZ[i].position.y;
	}
	accX[resolution - 1].position.y = Input.gyro.userAcceleration.x;
	accY[resolution - 1].position.y = Input.gyro.userAcceleration.y + 0.5;
	accZ[resolution - 1].position.y = Input.gyro.userAcceleration.z + 1.0;
		
	particleSystem.SetParticles(accX, accX.Length);
	particleSystem.SetParticles(accY, accY.Length);
//	particleSystem.SetParticles(accZ, accZ.Length);
}