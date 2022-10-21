import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';

//https://medium.com/geekculture/hello-cube-your-first-three-js-scene-in-angular-176c44b9c6c0
//https://discoverthreejs.com/book/first-steps/first-scene/
@Component({
  selector: 'cube',
  templateUrl: './3Dobject.component.html',
  styleUrls: ['./3Dobject.component.scss'],
})
//put inside shared lib inside own lib
export class ThreeDeeObjectComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //cube props
  @Input() public rotationSpeedX = 0.005;
  @Input() public rotationSpeedY = 0.001;
  @Input() public size = 200;
  @Input() public texture = '/assets/texture.jpg';

  //Stage props
  // imaginary planes located at two distances form the camera along the sight line
  // only objects between a camera's two clipping planes are rendered in that camera's view
  @Input() public cameraZ = 400;
  @Input() public fieldOfView = 1;
  @Input() public nearClipping = 1;
  @Input() public farClipping = 1000;

  //helper props
  //3D view where things in the distance appear smaller than things up close. (defines frustum)
  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  // rendered shape from vertices
  private geometry = new THREE.BoxGeometry(1, 1, 1);

  private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  public ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  /**
   *  Cretes the scene where we will add different elements
   *
   * @private
   * @memeberof ThreeDeeObjectComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color('red');
    this.scene.add(this.cube);
    //* Camera
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClipping,
      this.farClipping,
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Animate the cube with rotations on x/y -axis in an incremental approach
   * @private
   * @memberof ThreeDeeObjectComponent
   */
  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  /**
   * Start the rendering loop
   * define a WebGLREnderer which renders the actual image into a HTML canvas with provided scene and camera
   * also where we set actual size of canvas , width and height (as it should appear in the browser)
   *
   * @private
   * @memberof ThreeDeeObjectComponent
   */
  private startRenderingLoop() {
    //* Renderer
    //use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const component: ThreeDeeObjectComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    })();
  }
}
