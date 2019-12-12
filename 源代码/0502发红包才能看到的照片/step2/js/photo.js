/*��5��Ԫ ��Ŀ5-2 ��������ܿ�����Ƭ*/
var canvas = document.getElementById("myCanvas");//��ȡ����
var context = canvas.getContext("2d");//��ȡ������������

canvas.width = 877;//���������Ŀ�
canvas.height = 672;//���������ĸ�
var radius = 50;//�����뾶

var image = new Image();//����ͼƬ
image.src = "images/pic.jpg";//��ȡͼƬ·��
image.onload = function(e){
    initCanvas();//��ʼ����
}

function initCanvas(){
    Region ={
        x:Math.random()*(canvas.width-2*radius)+radius,
        y:Math.random()	*(canvas.height-2*radius)+radius,
        r:radius
    }
    draw();//����ͼƬ
}

function draw(){
    //����ÿ�������һ�λ��Ƶ�Բ�Σ���ֻ֤��ʾһ��Բ������
    context.clearRect(0,0,canvas.width, canvas.height);
    context.save();

    //����Բ��.��clip()��������Բ������
    context.beginPath();
    context.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);
    context.clip();

    context.drawImage(image,0,0);
    context.restore();
}

//�����¼�reset()�������ڸ÷����е���initCanvas()������ÿ���ڲ�ͬ��λ�û���Բ������
function reset(){
    initCanvas();
}

//�����¼�show()�������ڸ÷����е���draw(image)������ʹԲ�ΰ뾶���ڻ�������ʱ�Ϳ��Ի���������ͼƬ�ˣ�Ҳ�����յ������Ч����
function show(){
    Region.r = 2*Math.max(canvas.width,canvas.height);
    draw(image,Region);
}
