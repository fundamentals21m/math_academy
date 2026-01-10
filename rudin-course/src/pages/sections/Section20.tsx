import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-semibold mb-4">The Number e</h2>

      <Definition title="Definition of e (3.30)">
        <MathBlock>{'e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}.'}</MathBlock>
        <p className="mt-4">
          Here <InlineMath>{'n! = 1 \\cdot 2 \\cdot 3 \\cdots n'}</InlineMath> if <InlineMath>{'n \\geq 1'}</InlineMath>,
          and <InlineMath>{'0! = 1'}</InlineMath>.
        </p>
      </Definition>

      <p className="my-6">
        Since
      </p>
      <MathBlock>{'s_n = 1 + 1 + \\frac{1}{1 \\cdot 2} + \\frac{1}{1 \\cdot 2 \\cdot 3} + \\cdots + \\frac{1}{1 \\cdot 2 \\cdots n}'}</MathBlock>
      <MathBlock>{'< 1 + 1 + \\frac{1}{2} + \\frac{1}{2^2} + \\cdots + \\frac{1}{2^{n-1}} < 3,'}</MathBlock>

      <p className="my-6">
        the series converges, and the definition makes sense. In fact, the series converges
        very rapidly and allows us to compute <InlineMath>e</InlineMath> with great accuracy.
      </p>

      <p className="mb-6">
        It is of interest to note that <InlineMath>e</InlineMath> can also be defined by means of another
        limit process; the proof provides a good illustration of operations with limits.
      </p>

      <Theorem
        title="Alternative Definition of e (3.31)"
        proof={
          <>
            <p className="mb-4">Let</p>
            <MathBlock>{'s_n = \\sum_{k=0}^{n} \\frac{1}{k!}, \\quad t_n = \\left(1 + \\frac{1}{n}\\right)^n.'}</MathBlock>
            <p className="mb-4">By the binomial theorem,</p>
            <MathBlock>{'t_n = 1 + 1 + \\frac{1}{2!}\\left(1 - \\frac{1}{n}\\right) + \\frac{1}{3!}\\left(1 - \\frac{1}{n}\\right)\\left(1 - \\frac{2}{n}\\right) + \\cdots'}</MathBlock>
            <MathBlock>{'+ \\frac{1}{n!}\\left(1 - \\frac{1}{n}\\right)\\left(1 - \\frac{2}{n}\\right)\\cdots\\left(1 - \\frac{n-1}{n}\\right).'}</MathBlock>
            <p className="mb-4">
              Hence <InlineMath>{'t_n \\leq s_n'}</InlineMath>, so that
            </p>
            <MathBlock>{'\\limsup_{n \\to \\infty} t_n \\leq e.'}</MathBlock>
            <p className="mb-4">
              by Theorem 3.19. Next, if <InlineMath>{'n \\geq m'}</InlineMath>,
            </p>
            <MathBlock>{'t_n \\geq 1 + 1 + \\frac{1}{2!}\\left(1 - \\frac{1}{n}\\right) + \\cdots + \\frac{1}{m!}\\left(1 - \\frac{1}{n}\\right)\\cdots\\left(1 - \\frac{m-1}{n}\\right).'}</MathBlock>
            <p className="mb-4">
              Let <InlineMath>{'n \\to \\infty'}</InlineMath>, keeping <InlineMath>m</InlineMath> fixed. We get
            </p>
            <MathBlock>{'\\liminf_{n \\to \\infty} t_n \\geq 1 + 1 + \\frac{1}{2!} + \\cdots + \\frac{1}{m!},'}</MathBlock>
            <p className="mb-4">
              so that
            </p>
            <MathBlock>{'s_m \\leq \\liminf_{n \\to \\infty} t_n.'}</MathBlock>
            <p>
              Letting <InlineMath>{'m \\to \\infty'}</InlineMath>, we finally get
            </p>
            <MathBlock>{'e \\leq \\liminf_{n \\to \\infty} t_n.'}</MathBlock>
            <p className="mt-4">The theorem follows from (14) and (15).</p>
          </>
        }
      >
        <MathBlock>{'\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e.'}</MathBlock>
      </Theorem>

      <p className="my-6">
        The rapidity with which the series <InlineMath>{'\\sum 1/n!'}</InlineMath> converges can be estimated as
        follows: If <InlineMath>{'s_n'}</InlineMath> has the same meaning as above, we have
      </p>
      <MathBlock>{'e - s_n = \\frac{1}{(n+1)!} + \\frac{1}{(n+2)!} + \\frac{1}{(n+3)!} + \\cdots'}</MathBlock>
      <MathBlock>{'< \\frac{1}{(n+1)!}\\left\\{1 + \\frac{1}{n+1} + \\frac{1}{(n+1)^2} + \\cdots\\right\\} = \\frac{1}{n! n},'}</MathBlock>

      <p className="my-6">so that</p>
      <MathBlock>{'0 < e - s_n < \\frac{1}{n! n}.'}</MathBlock>

      <p className="my-6">
        Thus <InlineMath>{'s_{10}'}</InlineMath>, for instance, approximates <InlineMath>e</InlineMath> with
        an error less than <InlineMath>{'10^{-7}'}</InlineMath>. The inequality (16) is of
        theoretical interest as well, since it enables us to prove the irrationality
        of <InlineMath>e</InlineMath> very easily.
      </p>

      <Theorem
        title="Irrationality of e (3.32)"
        proof={
          <>
            <p className="mb-4">
              Suppose <InlineMath>e</InlineMath> is rational. Then <InlineMath>{'e = p/q'}</InlineMath>,
              where <InlineMath>p</InlineMath> and <InlineMath>q</InlineMath> are positive integers. By (16),
            </p>
            <MathBlock>{'0 < q!(e - s_q) < \\frac{1}{q}.'}</MathBlock>
            <p className="mb-4">
              By our assumption, <InlineMath>{'q!e'}</InlineMath> is an integer. Since
            </p>
            <MathBlock>{'q! s_q = q!\\left(1 + 1 + \\frac{1}{2!} + \\cdots + \\frac{1}{q!}\\right)'}</MathBlock>
            <p className="mb-4">
              is an integer, we see that <InlineMath>{'q!(e - s_q)'}</InlineMath> is an integer.
            </p>
            <p>
              Since <InlineMath>{'q \\geq 1'}</InlineMath>, (17) implies the existence of an
              integer between 0 and 1. We have thus reached a contradiction.
            </p>
          </>
        }
      >
        <p><InlineMath>e</InlineMath> is irrational.</p>
      </Theorem>

      <Callout type="info">
        <p>
          Actually, <InlineMath>e</InlineMath> is not even an algebraic number. For a simple proof
          of this, see page 25 of Niven's book, or page 176 of Herstein's, cited in the Bibliography.
        </p>
      </Callout>

      <Example title="Numerical Value of e">
        <p className="mb-4">
          The first several decimal places of <InlineMath>e</InlineMath> are:
        </p>
        <MathBlock>{'e \\approx 2.718281828459045...'}</MathBlock>
        <p className="mt-4">
          This can be computed efficiently using the series definition. With just
          10 terms, we get about 7 correct decimal places.
        </p>
      </Example>
    </LessonLayout>
  );
}
