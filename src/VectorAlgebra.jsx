import React from 'react';

class VectorAlgebra extends React.Component {
    constructor() {
        super();
        this.state = {
            myContent: `<div class="container">
            <h1 class="mt-3">جبر المُتَّجِهَات Vector Algebra</h1>
            <h2>مقدِّمة عن المُتَّجِهَات</h2>
            <h3>المقادير المُتَّجِهَة</h3>
            <p>
                المقادير المُتَّجِهَة هي مقادير لها قيمة و اتجاه.
                يُمَثَّل المُتَّجِه بسهم حيث أنَّ طول السهم يُعَبِّر عن 
                <span class="phrase">طَوِيْلَة magnitude</span> المُتَّجِه، 
                نَرْمُز لِمقدار مُتَّجِه ما بالرمز $\\vect{A}$ (حرف ثخين فوقه سهم) أو $\\overrightarrow{PQ}$ و المقصود به المُتَّجِه من النقطة $P$ إلى النقطة $Q$.
                نَرْمُز  لطَوِيْلَة المُتَّجِه $\\vect{A}$ بالرمز $\\norm{\\vect{A}}$ أو ببساطة $A$،
                و نَرْمُز  لطَوِيْلَة المُتَّجِه $\\overrightarrow{PQ}$ بالرمز $\\|\\overrightarrow{PQ}\\|$.
                \\begin{equation}
                    A=\\norm{\\vect{A}}, \\qquad A \\ge 0
                \\end{equation}
            </p>
            <h3>مُتَّجِه الواحدة</h3>
            <p>
                نقول عن المُتَّجِه الذي طويلته تساوي العدد واحد أنه 
                <span class="phrase">مُتَّجِه واحدة unit vector</span>.
                يمكن الحصول على مُتَّجِه الواحدة بتقسيم المُتَّجِه على طويلته.
                \\begin{equation}
                    \\uvect{A}=\\frac{\\vect{A}}{\\norm{\\vect{A}}}=\\frac{\\vect{A}}{A}
                    \\label{eq:unit-vector-definition}
                \\end{equation}
                يمكن التعبير عن أي مُتَّجِه $\\vect{A}$ بأنه مُتَّجِه الواحدة له $\\uvect{A}$ الذي جهته من جهة $\\vect{A}$ مضروباً بطَوِيْلَة المُتَّجِه $\\vect{A}$،
                هذا يعني أن:
                \\begin{equation}
                    \\vect{A} = \\norm{\\vect{A}} \\uvect{A} = A \\uvect{A}
                \\end{equation}
            </p>
            <h3>المُتَّجِه الصِّفْرِي</h3>
            <p>
                نقول عن مُتَّجِه أنَّه <span class="phrase">مُتَّجِه صفري zero vector</span>
                إذا كانت طويلته العدد صفر،
                و نرمز له $\\vect{0}$ أو ببساطة $0$،
                هذا يعني:
    
                \\begin{equation}
                    \\mathrm{if}\\, A=0 \\Rightarrow \\vect{A}=\\vect{0}
                \\end{equation}
            </p>
            <div class="card bg-danger mb-3">
                <div class="card-body">
                    
                    <p>
                        اتجاه المُتَّجِه الصفري غير معرف و ذلك لأن:
                        \\begin{equation*}
                            \\uvect{0} = \\frac{\\vect{0}}{\\norm{\\vect{0}}} = \\frac{\\vect{0}}{0} \\Rightarrow \\uvect{0} \\, \\mathrm{is\\,undefined}
                        \\end{equation*}
                    </p>
                </div>
            </div>
            <h3>خصائص المُتَّجِهَات</h3>
            <p>
                <ol>
                    <li>
                        يتساوى مُتَّجِهين $\\vect{A}$ و $\\vect{B}$ إذا كان لهما الطَوِيْلَة نفسها و الاتجاه نفسه،
                        بصرف النظر عن نقطة البدء لهما.
                    </li>
                    <li>
                        أي مُتَّجِه له اتجاه معاكس لاتجاه المُتَّجِه المعطى $\\vect{A}$ لكن له الطَوِيْلَة نفسها يرمز له $-\\vect{A}$
                        و ندعوه <span class="phrase">المُتَّجِه السالب negative vector</span>
                        لـ $\\vect{A}$.
                    </li>
                </ol>
            </p>
            <h3>المُتَّجِهَات المتوازية</h3>
            <p>
                نقول عن مُتَّجِهات أنها
                <span class="phrase">متوازية parallel</span>
                عندما تكون على الحامل نفسه و لها الاتجاه نفسه.
            </p>
            <figure class="figure">
                <img src="shizuku-asami.github.io/imgs/parallel_vec.png" class="figure-img img-fluid rounded mx-auto" alt="parallel vectors">
                <figcaption class="figure-caption">مُتَّجِهات متوازية.</figcaption>
            </figure>
            <h3>المُتَّجِهَات المتوازية عكسياً</h3>
            <p>
                نقول عن مُتَّجِهات أنها
                <span class="phrase">متوازية عكسياً antiparallel</span>
                عندما تكون على الحامل نفسه و جهة أحد المُتَّجِهين تعاكس جهة المُتَّجِه الآخر.
            </p>
            <figure class="figure">
                <img src="shizuku-asami.github.io/imgs/antiparallel_vec.png" class="figure-img img-fluid rounded mx-auto" alt="antiparallel vectors">
                <figcaption class="figure-caption">مُتَّجِهات متوازية عكسياً.</figcaption>
            </figure>
            <!-- <h3>المُتَّجِهَات المتخالفة</h3>
            <p>
                نقول عن مُتَّجِهات أنها
                <span class="phrase">متخالفة</span>
                إذا لم تكن على الحامل نفسه.
            </p> -->
            <h2>جمع المُتَّجِهَات</h2>
            <p>
                تختلف طبيعة جمع المُتَّجِهَات عن طبيعة جمع الأعداد،
                ففي حالة جمع الأعداد فإننا نكتفي فقط بجمع قيمها مع الانتباه إلى واحدات المقادير التي يتم جمعها،
                أما في حالة المُتَّجِهَات فيجب الأخذ بعين الاعتبار اتجاه المُتَّجِهَات التي نجمعها.
            </p>
            <h3>جمع المُتَّجِهَات المتوازية</h3>
            <p>
                حاصل جمع مُتَّجِهين $\\vect{A}$ و $\\vect{B}$ لهما الاتجاه نفسه هو مُتَّجِه آخر من جهة المُتَّجِهين و طويلته تساوي مجموع طويلتي المُتَّجِهين $\\vect{A}$ و $\\vect{B}$.
            </p>
            <h3>جمع المُتَّجِهَات المتوازية عكسياً</h3>
            <p>
                حاصل جمع مُتَّجِهين متعاكسين في الاتجاه هو مُتَّجِه آخر جهته من جهة المُتَّجِه ذو الطويلة الأكبر،
                و طويلته تساوي حاصل طرح طويلة المُتَّجِهين بالقيمة المطلقة.
            </p>
            <h3>جمع المُتَّجِهَات في الحالة العامة</h3>
            <p>
                نستطيع جمع المُتَّجِهَات هندسياً بطريقتين
            </p>
            <h4>طريقة المُضَلَّعَات</h4>
            <p>
                <ol>
                    <li>
                        نضع نقطة البداية للمُتَّجِه $\\vect{B}$ على نهاية المُتَّجِه $\\vect{A}$.
                    </li>
                    <li>
                        نصل بين بداية المُتَّجِه $\\vect{A}$ و نهاية المُتَّجِه $\\vect{B}$ لنحصل على المُتَّجِه $\\vect{A}+\\vect{B}$، و يكون اتجاه المُتَّجِه الناتج من بداية $\\vect{A}$ إلى نهاية $\\vect{B}$.
                    </li>
                </ol>
            </p>
            <h4>طريقة متوازي الأضلاع</h4>
            <p>
                <ol>
                    <li>
                        نضع بداية المُتَّجِهين $\\vect{A}$ و $\\vect{B}$ عند النقطة نفسها.
                    </li>
                    <li>
                        نرسم ممدداً من المُتَّجِه $\\vect{B}$ موازياً للمُتَّجِه $\\vect{A}$ و نرسم ممدداً آخر من المُتَّجِه $\\vect{A}$ موازياُ للمُتَّجِه $\\vect{B}$.
                    </li>
                    <li>
                        نقطة تلاقي هذين الممددين تعطينا نقطة النهاية للمُتَّجِه الناتج عن جمع المُتَّجِهين.
                    </li>
                    <li>
                        يكون حاصل جمع المُتَّجِهين هو القطر الرئيسي لمتوازي الأضلاع المحدد بالمُتَّجِهين $\\vect{A}$ و $\\vect{B}$.
                    </li>
                </ol>
            </p>
            <h3>طرح مُتَّجِهين</h3>
            <p>
                عملية طرح المُتَّجِه $\\vect{B}$ من $\\vect{A}$ تعني بشكل مكافئ جمع المُتَّجِه $\\vect{A}$ مع المُتَّجِه الذي له طويلة المُتَّجِه $\\vect{B}$ نفسها لكن جهته تعاكس جهة المُتَّجِه $\\vect{B}$.
                يتم طرح مُتَّجِهين هندسياً كما يلي:
            </p>
            <p>
                <ol>
                    <li>
                        نضع بداية المُتَّجِهين $\\vect{A}$ و $\\vect{B}$ عند النقطة نفسها.
                    </li>
                    <li>
                        نرسم المُتَّجِه $-\\vect{B}$  الذي طويلته تساوي طويلة المُتَّجِه $\\vect{B}$ لكن يعاكس اتجاهه.
                    </li>
                    <li>
                        نرسم ممدداً من المُتَّجِه $-\\vect{B}$ موازياً للمُتَّجِه $\\vect{A}$ و نرسم ممدداً آخر من المُتَّجِه $\\vect{A}$ موازياُ للمُتَّجِه $-\\vect{B}$.
                    </li>
                    <li>
                        نقطة تلاقي الممددين تعطي نقطة النهاية للمُتَّجِه $\\vect{A}-\\vect{B}$.
                    </li>
                    <li>
                        نصل بين نقطة البداية للمُتَّجِهين $\\vect{A}$ و $-\\vect{B}$ مع نقطة النهاية التي حصلنا عليها فنحصل على المُتَّجِه $\\vect{A}-\\vect{B}$.
                    </li>
                </ol>
            </p>
            <h3>خصائص جمع المُتَّجِهات</h3>
            <p>
                <ol>
                    <li>
                        عملية جمع المُتَّجِهات عملية تبديلية:
                        \\begin{equation*}
                            \\vect{A}+\\vect{B}=\\vect{B}+\\vect{A}
                        \\end{equation*}
                    </li>
                    <li>
                        عملية جمع المُتَّجِهات عملية تجميعية:
                        \\begin{equation*}
                            \\left( \\vect{A}+\\vect{B} \\right) + \\vect{C} = \\vect{A} + \\left( \\vect{B}+\\vect{C} \\right)
                        \\end{equation*}
                    </li>
                    <li>
                        يوجد مُتَّجِه صفري $\\vect{0}$ يحقق ما يلي من أجل أي مُتَّجِه $\\vect{A}$:
                        \\begin{equation*}
                            \\vect{A} + \\vect{0} = \\vect{0} + \\vect{A} = \\vect{A}
                        \\end{equation*}
                    </li>
                    <li>
                        من أجل أي مُتَّجِه $\\vect{A}$، يوجد مُتَّجِه $-\\vect{A}$ يحقق:
                        \\begin{equation*}
                            \\vect{A} + \\left( -\\vect{A} \\right) = \\left( -\\vect{A} \\right) + \\vect{A} = \\vect{0} 
                        \\end{equation*}
                    </li>
                </ol>
            </p>
            <h2>ضرب المُتَّجِهات</h2>
            <h3>تغيير قياس المُتَّجِه: ضرب المُتَّجِه بمقدار سُلَّمِي</h3>
            <p>
                يمكن تغيير قياس مُتَّجِه ما عن طريق ضرب طويلته بمقدار سُلَّمِي.
                نعرف العملية التي نغير بها قياس المُتَّجِه بالعلاقة:
                \\begin{equation}
                    \\vect{A}=A\\, \\uvect{A}\\Rightarrow k\\,\\vect{A}=\\left( kA \\right) \\uvect{A}
                \\end{equation}
                عندما نضرب المُتَّجِه بمقدار سُلَّمِي موجب فهذا يعني أننا نزيد من طول المُتَّجِه أو ننقص منه و ذلك بحسب قيمة $k$،
                فإذا كان $\\left| k \\right|&gt;1$ عندها طويلة المُتَّجِه الناتج تكون أكبر من طويلة المُتَّجِه الأصلي،
                أما إذا كان $0&lt;\\left| k \\right|&lt;1$ فإن طويلة المُتَّجِه الجديد أقل من طويلة المُتَّجِه الأصلي،
                و عندما يكون $k=0$ فإن المُتَّجِه الناتج هو المُتَّجِه الصفري $\\vect{0}$.
                يكون المُتَّجِه الناتج من جهة المُتَّجِه الأصلي إذا كان $k&gt;0$،
                أما إذا كان $k&lt;0$ عندها المُتَّجِه الجديد يعاكس جهة المُتَّجِه الأصلي.
            </p>
            <h4>خصائص عملية ضرب المُتَّجِهات بمقدار سُلَّمِي</h4>
            <p>
                لتكن $\\vect{A}$ و $\\vect{B}$ مُتَّجِهات،
                و لتكن $k$ و $p$ أعداداً سُلَّمِية،
                نستعرض فيما يلي خصائص عملية الضرب بمقدار سُلَّمِي:
            </p>
            <ol>
                <li>
                    عملية ضرب المُتَّجِه بمقدار سُلَّمِي هي عملية تبديلية:
                    \\begin{equation}
                        k\\,\\vect{A}=\\vect{A}\\,k
                    \\end{equation}
                </li>
                <li>
                    عملية ضرب المُتَّجِهات بمقدار سُلَّمِي هي عملية توزيعية:
                    \\begin{equation}
                        k\\left( \\vect{A}+\\vect{B} \\right)=k\\vect{A}+k\\vect{B}
                        \\label{eq:scalingisassociative}
                    \\end{equation}
                </li>
                <li>
                    عملية ضرب الأعداد السُّلَّمِية بمُتَّجِه أيضاً عملية توزيعية، هذا يعني أن:
                    \\begin{equation}
                        \\left( k + p \\right) \\vect{A} = k\\vect{A} + p\\vect{A}
                    \\end{equation}
                </li>
                <li>
                    إن ضرب الأعداد السُّلَّمِية بمُتَّجِه هو عملية تجميعية، هذا يعني أنه لو ضربنا المُتَّجِه بمقدار سُلَّمِي و من ثم ضربنا الناتج بمقدار سُلَّمِي فإننا نحصل على النتيجة نفسها عند ضرب العددين مع بعضهما و من ثم ضرب الناتج بالمُتَّجِه:
                    \\begin{equation}
                        k (p\\,\\vect{A}) = (kp) \\vect{A}
                    \\end{equation}
                </li>
                <li>
                    إن ضرب أي مُتَّجِه بالعدد $1$ يعطي المُتَّجِه نفسه:
                    \\begin{equation}
                        1\\left( \\vect{A} \\right) = \\vect{A}
                    \\end{equation}
                </li>
                <li>
                    ضرب أي مُتَّجِه بالعدد $0$ يعطي المُتَّجِه الصِّفْرِي:
                    \\begin{equation}
                        0\\left( \\vect{A} \\right) = \\vect{0}
                    \\end{equation}
                </li>
            </ol>
            <h4>الارتباط الخَطِّي و الاستقلال الخَطِّي</h4>
            <p>
                نقول عن مُتَّجِه $\\vect{A}$ أنه مرتبط خطياً مع مُتَّجِه آخر $\\vect{B}$ إذا وُجِدَ مقداراً سُلَّمِياً $k \\neq 0$ يحقق $\\vect{B} = k\\, \\vect{A}$.
                هذا يعني أنه إذا كان المُتَّجِهين $\\vect{A}$ و $\\vect{B}$ <span class="phrase">مرتبطين خطياً linearly dependent</span> فإن حاملين هذين المُتَّجِهين يكون مشتركاً.
                أما إذا كان $k=0$ هو المقدار السُّلَّمِي الوحيد الذي يحقق $\\vect{B} = k\\, \\vect{A}$ عندها نقول عن المُتَّجِهين أنهما <span class="phrase">مستقلين خطياً linearly independent</span>، و هذا يعني أن لكل مُتَّجِه حامل مختلف.
            </p>
            <p>
                بإمكاننا تعميم الارتباط الخطي و الاستقلال الخطي بين مُتَّجِهين إلى مجموعة من المُتَّجِهات.
                إذا كانت لدينا المُتَّجِهات $\\vect{A}_{1},\\vect{A}_{2},\\dots,\\vect{A}_{n}$ و استطعنا إيجاد أعداداً سُلَّمِية $a_{1},a_{2},\\dots,a_{n}$ لا تساوي الصفر بحيث تحقق:
                \\begin{equation}
                    a_{1} \\vect{A}_{1} + a_{2} \\vect{A}_{2} + \\dots + a_{n} \\vect{A}_{n} = \\vect{0}
                    \\label{eq:linear-dependence-of-vectors}
                \\end{equation}
                عندئذٍ نقول عن المُتَّجِهات $\\vect{A}_{1},\\vect{A}_{2},\\dots,\\vect{A}_{n}$ أنها مرتبطة خطياً.
                أما إذا كان الحل الوحيد الذي يحقق العلاقة $(\\ref{eq:linear-dependence-of-vectors})$ هو أن يكون
                $a_{1}=a_{2}=\\dots=a_{n}=0$
                عندئذٍ نقول عن المُتَّجِهات $\\vect{A}_{1},\\vect{A}_{2},\\dots,\\vect{A}_{n}$ أنها مستقلة خطياً عن بعضها البعض.
            </p>
            <h4>التركيب الخَطِّي للمُتَّجِهات</h4>
            <p>
                ليكن لدينا الأشِعَّة $\\vect{A}_{1},\\vect{A}_{2},\\dots,\\vect{A}_{n}$، و المقاديرالسُّلَّمِيَّة $a_{1},a_{2},\\dots,a_{n}$.
                نقول عن المُتَّجِه
                \\begin{equation}
                    \\vect{A} = a_{1} \\vect{A}_{1} + a_{2} \\vect{A}_{2} + \\dots + a_{n} \\vect{A}_{n}
                \\end{equation}
                أنه <span class="phrase">تركيب خطي linear combination</span>
                من المُتَّجِهات $\\vect{A}_{1},\\vect{A}_{2},\\dots,\\vect{A}_{n}$،
                و أن الأعداد السُّلَّمِية $a_{1},a_{2},\\dots,a_{n}$
                هي مقدار مساهمة كل مُتَّجِه من هذه المُتَّجِهات في تشكيل المُتَّجِه $\\vect{A}$.
            </p>
            <h3>الجُداء السُّلَّمِي</h3>
            <p>
                نعرف <span class="phrase">الجُداء السُّلَّمِي</span>
                بين مُتَّجِهين $\\vect{A}$ و $\\vect{B}$ و الذي نرمز له $\\vect{A}\\cdot\\vect{B}$ على أنه جداء طوليتي المُتَّجِهين $\\vect{A}$ و $\\vect{B}$ و كوساين أصغر زاوية بينهما، أي أن:
                \\begin{equation}
                    \\vect{A}\\cdot\\vect{B} = \\norm{\\vect{A}} \\norm{\\vect{B}} \\cos{\\phi_{AB}}
                \\end{equation}
                حيث أن $\\phi_{AB}$ هي أصغر زاوية بين $\\vect{A}$ و $\\vect{B}$.
                إن نتيجة الجداء السُّلَّمِي بين مُتَّجِهين هي مقدار سُلَّمِي.
            </p>
            <h4>خصائص عملية الجداء السُّلَّمِي</h4>
            <p>يمتلك الجداء السُّلَّمِي عدداً من الخصائص سوف نستفيد منها لاحقاً وهي:</p>
            <ol>
                <li>
                    من أجل أي زاوية $0\\le \\phi_{AB} \\le \\pi/2$، يكون الجداء السُّلَّمِي موجباً. أما من أجل $\\pi/2 \\le \\phi_{AB} \\le \\pi$، يكون الجداء السُّلَّمِي سالباً.
                </li>
                <li>
                    قيمة الجداء السُّلَّمِي لأي <span class="phrase">مُتَّجِهين متعامدين orthogonal vectors</span> تساوي الصفر، أي من أجل جميع الزوايا $\\phi_{AB}= \\displaystyle \\frac{\\pi}{2}+n \\pi$ حيث $n=0,\\pm 1, \\pm 2, \\pm 3, \\dots$.
                </li>
                <li>
                    من أجل $\\phi_{AB}=0$ (مُتَّجِهين متوازيين)،
                    تكون قيمة الجداء السُّلَّمِي مساوية إلى $AB$،
                    و من أجل $\\phi_{AB}=-\\pi$ (مُتَّجِهين متوازيين عكسياً)
                    تكون قيمة الجداء السُّلَّمِي مساوية إلى $\\left(-AB\\right)$.
                </li>
                <li>
                    طويلة الجداء السُّلَّمِي لمُتَّجِهين هي دوماً أصغر أو تساوي جداء طويلتي المُتَّجِهين، أي
                    \\begin{equation}
                        \\left| \\vect{A}\\cdot\\vect{B} \\right| \\le \\norm{\\vect{A}} \\norm{\\vect{B}}
                        \\label{eq:cauchy-shcwarz-inequality}
                    \\end{equation}
                    العلاقة $(\\ref{eq:cauchy-shcwarz-inequality})$ تسمى <span class="phrase">متراجحة كوتشي-شوارز Cauchy-Schwarz</span>.
                </li>
                <li>
                    يمكن النظر إلى الجداء السُّلَّمِي على أنه جداء طويلة المُتَّجِه $\\vect{A}$ مع طويلة مسقط المُتَّجِه $\\vect{B}$ على المُتَّجِه $\\vect{A}$ أو العكس بالعكس، أي $\\left( \\vect{A}\\cdot\\vect{B} = A \\left( B \\cos{\\phi_{AB}} \\right) = B \\left( A \\cos{\\phi_{AB}} \\right) \\right)$.
                </li>
                <li>
                    الجداء السُّلَّمِي عملية تبديلية:
                    \\begin{equation}
                        \\vect{A}\\cdot\\vect{B}=\\vect{B}\\cdot\\vect{A}
                    \\end{equation}
                </li>
                <li>
                    الجداء السُّلَّمِي عملية توزيعية
                    \\begin{equation}
                        \\vect{A}\\cdot\\left( \\vect{B} + \\vect{C} \\right) = \\vect{A}\\cdot\\vect{B} + \\vect{A}\\cdot\\vect{C}
                    \\end{equation}
                </li>
            </ol>
            <h3>الجداء المُتَّجِهي</h3>
            <p>
                نعرف <span class="phrase">الجداء المُتَّجِهي vector product</span>
                لمُتَّجِهين $\\vect{A}$ و $\\vect{B}$ و الذي يرمز له $\\vect{A}\\times\\vect{B}$،
                على أنه المُتَّجِه الذي طويلته تساوي إلى القيمة المطلقة لجداء طويلتي المُتَّجِهين ضرب ساين أصغر زاوية بين المُتَّجِهين في حين أن اتجاه المُتَّجِه الناتج يعامد المستوي الذي يتواجد فيه المُتَّجِهين.
                هذا يعني أن:
                \\begin{equation}
                    \\boxed{\\vect{A}\\times\\vect{B} = \\norm{\\vect{A}} \\norm{\\vect{B}}\\sin{\\phi_{AB}}\\,\\uvect{n}}
                \\end{equation}
                حيث أن $\\uvect{n}$ هو <span class="phrase">مُتَّجِه الواحدة الناظمي normal unit vector</span>، أي هو مُتَّجِه الواحدة الذي يعامد المستوي المحدد بالمُتَّجِهين $\\vect{A}$ و $\\vect{B}$،
                و $\\phi_{AB}$ هي أصغر زاوية بين المُتَّجِهين.
                يحدد مُتَّجِه الواحدة اتجاه المُتَّجِه الناتج عن الجداء الخارجي
            </p>
            <h4>خصائص عملية الجداء المُتَّجِهي</h4>
            <ol>
                <li>
                    الجداء الخارجي دوماً يعامد مستوي المُتَّجِهين؛ هذا يعني أن المُتَّجِه الناتج يعامد المُتَّجِهين.
                </li>
                <li>
                    الجداء المُتَّجِهي ليس تبديلي:
                    \\begin{equation}
                        \\vect{A}\\times\\vect{B}=-\\vect{B}\\times\\vect{A}
                    \\end{equation}
                </li>
                <li>
                    عندما يكون المُتَّجِهين معامدان لبعضهما علينا تمييز الحالتين $\\left( \\phi_{AB}=+ \\pi/2 \\right)$ و $\\left( \\phi_{AB}=- \\pi/2 \\right)$،
                    طويلة الجداء المُتَّجِهي سوف تساوي إلى جداء طويلتي المُتَّجِهين لكن من أجل $\\phi_{AB}=+\\pi/2$ يكون $\\sin{\\phi_{AB}}=+1$ و من أجل $\\phi_{AB}=-\\pi/2$ يكون $\\sin{\\phi_{AB}}=-1$ و هذا ما يحدد جهة مُتَّجِه الواحدة الناظمي.
                </li>
                <li>
                    إن الجداء المُتَّجِهي لمُتَّجِهين متوازيين يعطي المُتَّجِه الصفري $\\vect{0}$ لأن $\\sin{\\phi_{AB}}=0$
                </li>
                <li>
                    الجداء الخارجي لمُتَّجِه مع نفسه دوماً يعطي المُتَّجِه الصفري $\\vect{0}$ لأن $\\sin{\\phi_{AA}}=0$.
                </li>
                <li>
                    الجداء المُتَّجِهي توزيعي:
                    \\begin{equation}
                        \\vect{A}\\times\\left( \\vect{B}+\\vect{C} \\right)=\\vect{A}\\times\\vect{B}+\\vect{A}\\times\\vect{C}
                        \\label{eq:vectorproductdistributive}
                    \\end{equation}
                </li>
            </ol>
            <h4>المعنى الهندسي للجداء المُتَّجِهي</h4>
            <p>
                رأينا من تعريف الجداء المُتَّجِهي أن ناتج هذه العملية يعطي مُتَّجِهاً،
                إذاً طويلة الجداء المُتَّجِهي ستعطي طول المُتَّجِه الناتج.
                لكن هناك معنى هندسي آخر لطويلة الجداء المُتَّجِهي،
                إذا كتبنا من تعريف الجداء المُتَّجِهي:
                \\begin{equation}
                    \\norm{\\vect{A}\\times\\vect{B}} = \\norm{\\vect{A}} \\norm{\\vect{B}} \\abs{\\sin{\\phi_{AB}}}, \\qquad \\norm{\\uvect{n}} = 1
                    \\label{eq:vector-product-magnitude}
                \\end{equation}
                و نظرنا إلى الطرف الأيمن من  العلاقة $(\\ref{eq:vector-product-magnitude})$
                فإننا نرى الجداء $\\norm{\\vect{A}} \\norm{\\vect{B}}$ و الذي يمثل مساحة مستطيل طول ضلعيه $\\norm{\\vect{A}}$ و $\\norm{\\vect{B}}$،
                لكن يوجد أيضاً حداً إضافياً و هو $\\abs{\\sin{\\phi_{AB}}}$ و الذي يلعب دوراً أساسياً في تعريف المساحة الذي ذكرناه.
                لو نظرنا مرة أخرى إلى القيم التي يأخذها $\\abs{\\sin{\\phi_{AB}}}$ سنجد أن أعظم قيمة له هي عندما يكون المُتَّجِهين $\\vect{A}$ و $\\vect{B}$ متعامدين،
                مما يعني أن المساحة التي نحصل عليها هي مساحة المستطيل نفسه،
                بينما تنعدم قيمة $\\abs{\\sin{\\phi_{AB}}}$ عندما يكون المُتَّجِهين متوازيين و بالتالي المساحة في هذه الحالة معدومة،
                و عليه فإن $\\norm{\\vect{A}\\times\\vect{B}}$ يعطينا مساحة متوازي الأضلاع المحدد بالمُتَّجِهين $\\vect{A}$ و $\\vect{B}$.
            </p>
            <h3>الجداءات السُّلَّمِية و المُتَّجِهية المختلطة</h3>
            <p>
                نرى الآن نتائج تطبيق قواعد الجداء السُّلَّمِي أو المُتَّجِهي على نحوٍ متتالي لعدد من المُتَّجِهَات.
                إن طبيعة تعريف الجداء السُّلَّمِي و الجداء المُتَّجِهي لا تسمح لنا بالحصول على جميع الإمكانيات في هذه الحالة،
                بمعنى أنه يجب مراعاة طبيعة الكمية الناتجة عن الجداء الأول و طبيعة الكمية الثانية التي يتم إدخالها مع النتيجة الأولى في الجداء الثاني، وهكذا.
            </p>
            <div class="card bg-secondary mb-3">
                <div class="card-body">
                    <p class="card-text text-center">
                        الأنواع التالية من الجداءات الثلاثية معرّفة بشكل سليم:
                        \\begin{equation*}
                            \\left( \\vect{A} \\cdot \\vect{B} \\right)\\vect{C}, \\quad \\vect{A} \\cdot \\left( \\vect{B} \\times \\vect{C} \\right), \\quad \\vect{A} \\times \\left( \\vect{B} \\times \\vect{C} \\right)
                        \\end{equation*}
                    </p>
                </div>
            </div>
            <p>
                ينتج عن العملية $\\left( \\vect{A} \\cdot \\vect{B} \\right)\\vect{C}$ مُتَّجِهاً.
                لأن $\\left( \\vect{A} \\cdot \\vect{B} \\right)$ يعطي عدداً سُلَّمِياً، و منه ضرب هذه النتيجة بالمُتَّجِه $\\vect{C}$ سوف يغير قياس ذلك المُتَّجِه.
                ينبغي الإشارة إلى أنه بشكلٍ عام:
                \\begin{equation}
                    \\left( \\vect{A} \\cdot \\vect{B} \\right) \\vect{C} \\neq \\vect{A} \\left( \\vect{B} \\cdot \\vect{C} \\right)
                \\end{equation}
            </p>
            <h4>الجداء الثلاثي المُتَّجِهي</h4>
            <p>
                يعرف الجداء الثلاثي المُتَّجِهي على النحو التالي:
                    \\begin{equation}
                        \\boxed{\\vect{A}\\times\\left( \\vect{B}\\times\\vect{C} \\right) = \\vect{B}\\left( \\vect{A}\\cdot\\vect{C} \\right)-\\vect{C}\\left( \\vect{A}\\cdot\\vect{B} \\right)}
                        \\label{eq:vector-triple-product-identity}
                    \\end{equation}
                    و ندعوه <span class="phrase">الجداء الثلاثي المُتَّجِهي vector triple product</span>
                    لأنه مؤلف من ثلاثة مُتَّجِهَات و ناتج هذا الجداء هو مُتَّجِه.
            </p>
            <h5>خصائص الجداء الثلاثي المُتَّجِهي</h5>
            <ol>
                <li>
                    الجداء الثلاثي المُتَّجِهي ليس تجميعياً:
                    \\begin{equation}
                        \\vect{A}\\times\\left( \\vect{B}\\times\\vect{C} \\right) \\neq \\left( \\vect{A}\\times\\vect{B} \\right) \\times \\vect{C}
                    \\end{equation}
                    هذا يعني أن ترتيب الجداء المُتَّجِهي بين المُتَّجِهَات أمرٌ مهمٌ،
                    لهذا السبب ينبغي دوماً استخدام الأقواس في عمليات الجداء المُتَّجِهي.
                    إن العبارة $\\vect{A}\\times\\vect{B}\\times\\vect{C}$ ليست عبارة سليمة لعدم وجود الأقواس و التي تحدد الأولوية في عملية الجداء المُتَّجِهي لأنه كما ذكرنا سابقاً الجداء المُتَّجِهي ليس تجميعياً.
                    يسمح الطرف الأيمن من العلاقة $(\\ref{eq:vector-triple-product-identity})$ معرفة الترتيب الذي تتم به عملية الجداء الثلاثي المُتَّجِهي.
                </li>
            </ol>
            <h4>الجداء الثلاثي السُّلَّمِي</h4>
            <p>
                جميع الجداءات من الشكل $\\vect{A} \\cdot \\left( \\vect{B}\\times\\vect{C} \\right)$ تدعى <span class="phrase">الجداء الثلاثي السُّلَّمِي scalar triple product</span> لأن ناتج هذه العملية يعطي مقداراً سُلَّمِياً.
            </p>
            <h5>خصائص الجداء الثلاثي السُّلَّمِي</h5>
            <ol>
                <li>
                    الجداء الثلاثي السُّلَّمِي يحقق قاعدة خاصية التبديل الدوري، بمعنى أن:
                    \\begin{equation}
                        \\vect{A} \\cdot \\left( \\vect{B}\\times\\vect{C} \\right) = \\vect{B} \\cdot \\left( \\vect{C}\\times\\vect{A} \\right) = \\vect{C} \\cdot \\left( \\vect{A}\\times\\vect{B} \\right)
                    \\end{equation}
                </li>
                <li>
                    من خاصية التبديل الدوري للجداء الثلاثي السُّلَّمِي نرى أن:
                    \\begin{equation}
                        \\vect{A} \\cdot \\left( \\vect{B}\\times\\vect{C} \\right) = - \\vect{A} \\cdot \\left( \\vect{C}\\times\\vect{B} \\right)
                    \\end{equation}
                </li>
                <li>
                    من الخاصية التبديلية للجداء السُّلَّمِي نرى أن:
                    \\begin{equation}
                        \\vect{A} \\cdot \\left( \\vect{B}\\times\\vect{C} \\right) =   \\left( \\vect{B}\\times\\vect{C} \\right) \\cdot \\vect{A}
                    \\end{equation}
                </li>
            </ol>
            <h5>جملة يمينية اليد</h5>
            <p>
                نقول عن المُتَّجِهَات $\\vect{A}$ و $\\vect{B}$ و $\\vect{C}$ غير المشتركة في المستوي و التي لها مبدأ مشترك
                أنها تشكل <span class="phrase">جملة يمينية اليد right-handed system</span>
                إذا أمكن الدوران من المُتَّجِه الأول $\\vect{A}$ إلى المُتَّجِه الثاني $\\vect{B}$
                بزاوية أقل من
                $180^{\\circ}$
                عن طريق ثني أصابع اليد اليمنى بحيث يشير الإبهام إلى جهة المُتَّجِه $\\vect{C}$.
                بمعنى أنه إذا تحقق $\\left( \\vect{A} \\times \\vect{B} \\right) \\cdot \\vect{C} &gt; 0$
                عندها المُتَّجِهَات $\\vect{A}$ و $\\vect{B}$ و $\\vect{C}$ تشكل جملة يمينية اليد.
            </p>
            <h5>جملة يسارية اليد</h5>
            <p>
                نقول عن المُتَّجِهَات $\\vect{A}$ و $\\vect{B}$ و $\\vect{C}$ غير المشتركة في المستوي و التي لها مبدأ مشترك
                أنها تشكل <span class="phrase">جملة يسارية اليد left-handed system</span>
                إذا أمكن الدوران من المُتَّجِه الأول $\\vect{A}$ إلى المُتَّجِه الثاني $\\vect{B}$
                بزاوية أقل من
                $180^{\\circ}$
                عن طريق ثني أصابع اليد اليسرى بحيث يشير الإبهام إلى جهة المُتَّجِه $\\vect{C}$.
                بمعنى أنه إذا تحقق $\\left( \\vect{A} \\times \\vect{B} \\right) \\cdot \\vect{C} &lt; 0$
                عندها المُتَّجِهَات $\\vect{A}$ و $\\vect{B}$ و $\\vect{C}$ تشكل جملة يسارية اليد.
            </p>
            <h4>نشر مُتَّجِه على مُتَّجِهَات الواحدة لمُتَّجِه آخر</h4>
            <p>
                ليكن لدينا مُتَّجِه ما $\\vect{A}$،
                و ليكن لدينا مُتَّجِهاً آخر $\\vect{B}$ يصنع زاوية $\\theta$ مع المُتَّجِه $\\vect{A}$.
                لو أردنا لسببٍ ما أن نُعَبِّر عن المُتَّجِه $\\vect{A}$ بدلالة مُتَّجِهين أحدهما يوازي المُتَّجِه $\\vect{B}$ و الآخر يعامده،
                فإنه من الممكن كما رأينا سابقاً بالاستفادة من الجداء السُّلَّمِي بين مُتَّجِهين $\\vect{A}$ و $\\vect{B}$ أن نكتب المركبة المُتَّجِهية لـ $\\vect{A}$ الموازية للمُتَّجِه $\\vect{B}$ على النحو:
                \\begin{equation}
                    \\vect{A}_{\\parallel \\vect{B}} = \\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B}
                \\end{equation}
                أما المركبة المُتَّجِهية لـ $\\vect{A}$ المعامدة للمُتَّجِه $\\vect{B}$ تكون:
                \\begin{equation}
                    \\vect{A}_{\\perp \\vect{B}} = \\norm{\\vect{A}} \\sin{\\theta} \\: \\uvect{B}_{\\perp}
                \\end{equation}
                حيث أن $\\uvect{B}_{\\perp}$ هو مُتَّجِه واحدة يعامد المُتَّجِه $\\vect{B}$ و ينتمي إلى المستوي المحدد بالمُتَّجِهين $\\vect{A}$ و $\\vect{B}$.
                نستطيع إذاً كتابة المُتَّجِه $\\vect{A}$ على النحو:
                \\begin{equation}
                    \\vect{A} = \\vect{A}_{\\parallel \\vect{B}} + \\vect{A}_{\\perp \\vect{B}}
                \\end{equation}
                \\begin{equation}
                    \\vect{A} = \\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B} + \\norm{\\vect{A}} \\sin{\\theta} \\: \\uvect{B}_{\\perp}
                \\end{equation}
                لنعزل مُتَّجِه الواحدة $\\uvect{B}_{\\perp}$:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\vect{A}-\\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B}}{\\norm{\\vect{A}} \\sin{\\theta}}
                \\end{equation}
                يمكننا التوقف هنا، أو بإمكاننا المتابعة و أن نُخرج من البسط $\\norm{\\vect{A}}$ عاملاً مشتركاً:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\norm{\\vect{A}}}{\\norm{\\vect{A}}} \\frac{\\vect{A}-\\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B}}{\\norm{\\vect{A}} \\sin{\\theta}} = \\frac{\\vect{A}\\,/\\norm{\\vect{A}}-\\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B}}{\\norm{\\vect{A}} \\sin{\\theta}}
                \\end{equation}
                نعيد كتابة العلاقة على النحو التالي حيث $\\uvect{A} = \\vect{A}\\,/\\norm{\\vect{A}}$ و $\\csc{\\theta}=1/\\sin{\\theta}$ و $\\cot{\\theta} = \\cos{\\theta}/\\sin{\\theta}$:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\uvect{A}-\\norm{\\vect{A}} \\cos{\\theta} \\: \\uvect{B}}{\\norm{\\vect{A}} \\sin{\\theta}} = \\frac{1}{\\sin{\\theta}} \\uvect{A} - \\frac{\\cos{\\theta}}{\\sin{\\theta}} \\uvect{B}
                \\end{equation}
                \\begin{equation}
                    \\boxed{\\uvect{B}_{\\perp} = \\csc{\\theta} \\: \\uvect{A} - \\cot{\\theta} \\: \\uvect{B}}
                \\end{equation}
                ظهرت لدينا علاقة لمُتَّجِه الواحدة $\\uvect{B}_{\\perp}$ بدلالة مُتَّجِهَات الواحدة $\\uvect{A}$ و $\\uvect{B}$، و معاملات النشر هي توابع مثلثية.
                لنستغل وجود التابع المثلثي $\\sin{\\theta}$ و لنُدْخِل تعريف الجداء المُتَّجِهي في عبارة $\\uvect{B}_{\\perp}$، إن:
                \\begin{equation}
                    \\sin{\\theta} = \\frac{\\norm{\\vect{A}\\times\\vect{B}}}{\\norm{\\vect{A}}\\norm{\\vect{B}}}
                \\end{equation}
                نعيد كتابة $\\vect{B}_{\\perp}$ على النحو:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{1}{\\norm{\\vect{A}\\times\\vect{B}}/\\norm{\\vect{A}}\\norm{\\vect{B}}} \\uvect{A} - \\frac{\\cos{\\theta}}{\\norm{\\vect{A}\\times\\vect{B}}/\\norm{\\vect{A}}\\norm{\\vect{B}}} \\uvect{B}
                \\end{equation}
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\norm{\\vect{A}}\\norm{\\vect{B}}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{A} - \\frac{\\norm{\\vect{A}}\\norm{\\vect{B}}\\cos{\\theta}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{B}
                \\end{equation}
                نرى ظهور تعريف الجداء السُّلَّمِي في الحد الثاني من الطرف الأيمن:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\norm{\\vect{A}}\\norm{\\vect{B}}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{A} - \\frac{\\vect{A} \\cdot \\vect{B}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{B}
                \\end{equation}
                من الأجمل أن نكتب علاقة $\\uvect{B}_{\\perp}$ بدلالة المُتَّجِهَات $\\vect{A}$ و $\\vect{B}$ بدلاً من أن تُكتَب بدلالة مزيج منها و من مُتَّجِهَات الواحدة لها،
                رأينا أنه يمكن كتابة أي مُتَّجِه على هيئة طويلته مضروبة بمُتَّجِه الواحدة من جهة المُتَّجِه، في الحد الأول نكتب $\\vect{A}=\\norm{\\vect{A}} \\uvect{A}$. إذاً:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\norm{\\vect{B}}}{\\norm{\\vect{A}\\times\\vect{B}}} \\vect{A} - \\frac{\\vect{A} \\cdot \\vect{B}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{B}
                \\end{equation}
                يبقى علينا التخلص من مُتَّجِه الواحدة $\\uvect{B}$،
                و هذا ممكن إذا ضربنا الحد الثاني بالنسبة $\\norm{\\vect{B}}/\\norm{\\vect{B}}$،
                لكن حتى يصبح الحد الأول مشابهاً إلى الحد الثاني سوف نضرب الحد الأول أيضاً بهذه النسبة:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\norm{\\vect{B}}}{\\norm{\\vect{B}}} \\frac{\\norm{\\vect{B}}}{\\norm{\\vect{A}\\times\\vect{B}}} \\vect{A} - \\frac{\\norm{\\vect{B}}}{\\norm{\\vect{B}}} \\frac{\\vect{A} \\cdot \\vect{B}}{\\norm{\\vect{A}\\times\\vect{B}}} \\uvect{B}
                \\end{equation}
                نعيد كتابة العلاقة على النحو التالي حيث $\\norm{\\vect{B}}\\norm{\\vect{B}}=\\vect{B} \\cdot \\vect{B}$ و $\\vect{B} = \\norm{\\vect{B}} \\uvect{B}$:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\vect{B} \\cdot \\vect{B}}{\\norm{\\vect{B}}\\norm{\\vect{A}\\times\\vect{B}}} \\vect{A} -  \\frac{\\vect{A} \\cdot \\vect{B}}{\\norm{\\vect{B}}\\norm{\\vect{A}\\times\\vect{B}}} \\vect{B}
                \\end{equation}
                يمكن الملاحظة أن المُتَّجِه $\\vect{B}$ يعامد المُتَّجِه $\\vect{A}\\times\\vect{B}$، هذا يعني أنه يمكننا الاستفادة من تعريف الجداء المُتَّجِهي و كتابة $\\norm{\\vect{B}}\\norm{\\vect{A}\\times\\vect{B}}$ على النحو $\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}$:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{\\vect{B} \\cdot \\vect{B}}{\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}} \\vect{A} -  \\frac{\\vect{A} \\cdot \\vect{B}}{\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}} \\vect{B}
                \\end{equation}
                نُخرج $\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}$ عاملاً مشتركاً و نستفيد من أن $\\vect{A} \\cdot \\vect{B} = \\vect{B} \\cdot \\vect{A}$:
                \\begin{equation}
                    \\uvect{B}_{\\perp} = \\frac{1}{\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}} \\Bigg[ \\left( \\vect{B} \\cdot \\vect{B} \\right) \\vect{A} - \\left( \\vect{B} \\cdot \\vect{A} \\right) \\vect{B} \\Bigg]
                \\end{equation}
                نستطيع كتابة العلاقة السابقة بشكلٍ مختزل بالاستفادة من تعريف الجداء الثلاثي المُتَّجِهي:
                \\begin{equation}
                    \\vect{B} \\times \\left( \\vect{A} \\times \\vect{B} \\right) = \\left( \\vect{B} \\cdot \\vect{B} \\right) \\vect{A} - \\left( \\vect{B} \\cdot \\vect{A} \\right) \\vect{B}
                \\end{equation}
                إذاً:
                \\begin{equation}
                    \\boxed{\\uvect{B}_{\\perp} = \\frac{\\vect{B} \\times \\left( \\vect{A} \\times \\vect{B} \\right)}{\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}}}
                \\end{equation}
                هذه العلاقة تعطي مُتَّجِه واحدة يعامد المُتَّجِه $\\vect{B}$، حيث أن مُتَّجِه الواحدة $\\uvect{B}_{\\perp}$ يوازي المستوي المحدد بالمُتَّجِهين $\\vect{A}$ و $\\vect{B}$.
                يمكن إذاً كتابة $\\vect{A}_{\\perp \\vect{B}}$ على النحو:
                \\begin{equation}
                    \\vect{A}_{\\perp \\vect{B}} = \\norm{\\vect{A}} \\sin{\\theta} \\: \\frac{\\vect{B} \\times \\left( \\vect{A} \\times \\vect{B} \\right)}{\\norm{\\vect{B} \\times \\left( \\vect{A}\\times\\vect{B} \\right)}}
                \\end{equation}
            </p>
        </div>`
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

export default VectorAlgebra;