import React from 'react';

let content = `<div class="container">
<h1 class="mt-3">الأشعة في الإحداثيات الديكارتية</h1>
<p>
    نُذَكِّرُ بأن الإحداثيات الديكارتية عبارة عن جملة من المحاور الإحداثية المتعامدة فيما بينها
    و تكون القسيمات لهذه المحاور متساوية،
    تتلاقى هذه المحاور عند نقطة مشتركة تدعى مبدأ الإحداثيات $O$.
    سَنُعَرِّف أشعة الواحدة الموجودة على المحاور في الإحداثيات الديكارتية.
    ليكن $\\uvect{e}_{x}$ شعاع الواحدة المحمول على المحور $x$ و جهته من مبدأ الإحداثيات إلى الاتجاه الموجب للمحور $x$،
    و ليكن $\\uvect{e}_{y}$ شعاع الواحدة المحمول على المحور $y$ و جهته من مبدأ الإحداثيات إلى الاتجاه الموجب للمحور $y$،
    و ليكن $\\uvect{e}_{z}$ شعاع الواحدة المحمول على المحور $z$ و جهته من مبدأ الإحداثيات إلى الاتجاه الموجب للمحور $z$.
    يمكن كتابة جميع الأشعة في الفضاء ثلاثي الأبعاد بدلالة أشعة الواحدة للإحداثيات الديكارتية.
</p>
<h2>تعريف الشعاع في الإحداثيات الديكارتية</h2>
<p>
    نعرف شعاعاً $\\vect{A}$ في الإحداثيات الديكاريتية ضمن الفضاء ثلاثي الأبعاد $\\mathbb{R}^{3}$ بالعلاقة:
    \\begin{equation}
        \\vect{A} = A_{x} \\uvect{e}_{x} + A_{y} \\uvect{e}_{y} + A_{z} \\uvect{e}_{z}
    \\end{equation}
    ندعو $A_{x}$ و $A_{y}$ و $A_{z}$ مركبات الشعاع $\\vect{A}$ حيث $A_{x}$ هي مركبة الشعاع على المحور $x$ و $A_{y}$ هي مركبة الشعاع على المحور $y$ و $A_{z}$ هي مركبة الشعاع على المحور $z$.
    أيضاً من الممكن كتابة شعاع ما على النحو
    \\begin{equation}
        \\vect{A} = \\left( A_{x}, A_{y}, A_{z} \\right)
    \\end{equation}
    و طويلة الشعاع $\\vect{A}$ هي
    \\begin{equation}
        \\norm{\\vect{A}} = \\sqrt{\\left(  A_{x} \\right)^{2} + \\left( A_{y} \\right)^{2} + \\left( A_{z} \\right)^{2}}
    \\end{equation}
</p>
<h3>شعاع الموضع</h3>
<p>
    إذا كانت لدينا في الفضاء ثلاثي الأبعاد $\\mathbb{R}^{3}$ نقطة $P$ إحداثياتها $(x,y,z)$ فإننا نعرف <span class="phrase">شعاع الموضع position vector</span> للنقطة $P$ على أنه الشعاع الذي مبدأه هو مبدأ الإحداثيات $O$ و ينتهي عند النقطة $P$:
    \\begin{equation}
        \\vect{r} = x \\, \\uvect{e}_{x} + y \\, \\uvect{e}_{y} + z \\, \\uvect{e}_{z} 
    \\end{equation}
    تمثل طويلة شعاع الموضع بعد النقطة $P$ عن مبدأ الإحداثيات $O$ و الذي يعطى بالعلاقة التالية حسب نظرية فيثاغورث:
    \\begin{equation}
        \\norm{\\vect{r}} = \\sqrt{x^{2} + y^{2} + z^{2}}
    \\end{equation}
</p>
<h2>جمع الأشعة و طرحها</h2>
<p>
    لنرى كيف تتم عملية الجمع لهذين الشعاعين بشكل عام في الإحداثيات الديكارتية،
    فإذا كان $\\vect{A}=A_{x}\\uvect{e}_{x}+A_{y}\\uvect{e}_{y}+A_{z}\\uvect{e}_{z}$ و $\\vect{B}=B_{x}\\uvect{e}_{x}+B_{y}\\uvect{e}_{y}+B_{z}\\uvect{e}_{z}$ و $\\vect{C}=\\vect{A}+\\vect{B}$ عندها يكون:
    \\begin{equation}
        \\begin{split}
            \\vect{C}&=\\left( A_{x}\\uvect{e}_{x}+A_{y}\\uvect{e}_{y}+A_{z}\\uvect{e}_{z} \\right)+\\left( B_{x}\\uvect{e}_{x}+B_{y}\\uvect{e}_{y}+B_{z}\\uvect{e}_{z} \\right) \\\\
        &=\\left( A_{x}+B_{x} \\right)\\uvect{e}_{x}+\\left( A_{y}+B_{y} \\right)\\uvect{e}_{y}+\\left( A_{z}+B_{z} \\right)\\uvect{e}_{z} \\\\
        &= C_{x}\\uvect{e}_{x} + C_{y}\\uvect{e}_{y} + C_{z}\\uvect{e}_{z}
        \\end{split}
    \\end{equation}
</p>
<div class="card bg-secondary">
    <div class="card-body">
        <p class="card-text">
            إذا كان $\\vect{A} = \\left( A_{x}, A_{y}, A_{z} \\right)$ و $\\vect{B} = \\left( B_{x}, B_{y}, B_{z} \\right)$ فإن حاصل جمع شعاعين في الإحداثيات الديكارتية هو
            \\begin{equation}
                \\vect{A} + \\vect{B} = \\left( A_{x} + B_{x}, A_{y} + B_{y}, A_{z} + B_{z} \\right)
            \\end{equation}
            نرى أنه عند جمع شعاعين فإننا نضيف معاً المركبات على المحاور نفسها.
        </p>
    </div>
</div>
</div>`;

class VectorAlgebraCartesian extends React.Component {
    constructor() {
        super();
        this.state = {
            myContent: content
        }
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.myContent }} />
            </div>
        );
    }
}

export default VectorAlgebraCartesian;