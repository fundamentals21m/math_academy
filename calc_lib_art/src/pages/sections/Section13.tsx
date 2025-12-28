import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Card, CardGrid, CardHeader } from '../../components/common/Card';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-semibold mb-4">Calculus in Art and Music</h2>

      <p className="text-dark-200 mb-6 text-lg leading-relaxed">
        Calculus might seem far removed from the arts, but look closer and you'll find it
        everywhere. From the curves of Renaissance architecture to the compression of digital
        music, from the rendering of CGI movies to the algorithms that recommend what you
        watch next—<strong>calculus shapes the aesthetic world around us</strong>.
      </p>

      <Callout type="info">
        <p className="italic">
          "Music is the pleasure the human soul experiences from counting without being aware
          that it is counting."
        </p>
        <p className="text-sm text-dark-400 mt-2">— Gottfried Wilhelm Leibniz</p>
      </Callout>

      {/* Music and Sound */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">The Mathematics of Sound</h2>

      <p className="text-dark-200 mb-6">
        Sound is vibration—a pressure wave traveling through air. Every musical note is a
        solution to a differential equation.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-primary-300 mb-4">The Wave Equation</h4>
        <MathBlock>{`\\frac{\\partial^2 y}{\\partial t^2} = c^2 \\frac{\\partial^2 y}{\\partial x^2}`}</MathBlock>
        <p className="text-dark-200 mt-4">
          This equation describes how vibrations propagate through a string, an air column,
          or any elastic medium. Its solutions are the sine and cosine functions—the building
          blocks of all musical sounds.
        </p>
      </div>

      <CardGrid>
        <Card>
          <CardHeader title="Fourier Analysis" />
          <p className="text-sm text-dark-300">
            Every sound—a violin, a voice, a door slam—can be decomposed into pure sine waves.
            This is Fourier analysis, which uses integrals to extract the frequency components
            of any signal.
          </p>
        </Card>
        <Card>
          <CardHeader title="Digital Audio" />
          <p className="text-sm text-dark-300">
            MP3 and other compression formats use Fourier transforms to identify which
            frequencies we can't hear, then discard them. Calculus makes your music library
            fit in your pocket.
          </p>
        </Card>
      </CardGrid>

      {/* Harmonics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Harmonics and Timbre</h2>

      <p className="text-dark-200 mb-6">
        Why does a violin sound different from a flute playing the same note? The answer
        lies in <strong>harmonics</strong>—the overtones that accompany the fundamental frequency.
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <p className="text-dark-200 mb-4">
          When you pluck a string, it vibrates at its fundamental frequency{' '}
          <MathInline>{'f'}</MathInline> and also at multiples:{' '}
          <MathInline>{'2f, 3f, 4f, \\ldots'}</MathInline>
        </p>
        <MathBlock>{`y(x,t) = \\sum_{n=1}^{\\infty} A_n \\sin\\left(\\frac{n\\pi x}{L}\\right)\\cos(n\\omega t)`}</MathBlock>
        <p className="text-dark-200 mt-4">
          The relative strengths of these harmonics (the <MathInline>{'A_n'}</MathInline> values)
          determine the instrument's characteristic sound—its <em>timbre</em>.
        </p>
      </div>

      <Callout type="success">
        <p>
          <strong>Synthesizers:</strong> Electronic music synthesizers work by combining sine
          waves according to Fourier principles. Understanding the math lets musicians craft
          entirely new sounds.
        </p>
      </Callout>

      {/* Visual Arts */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Curves in Visual Art</h2>

      <p className="text-dark-200 mb-6">
        Artists have long been fascinated by beautiful curves. Many of the most aesthetically
        pleasing curves have mathematical descriptions involving calculus.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-amber-300 mb-3">The Catenary</h4>
          <MathBlock>{`y = a\\cosh\\left(\\frac{x}{a}\\right)`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            The shape of a hanging chain. Used in architecture from ancient arches to the
            Gateway Arch in St. Louis. Its derivative involves <MathInline>{'\\sinh'}</MathInline>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-300 mb-3">Bézier Curves</h4>
          <p className="text-dark-200 text-sm mb-2">
            The curves used in every font, every vector graphic, every CAD drawing. Defined
            using parametric equations and derivatives to ensure smooth connections.
          </p>
          <p className="text-dark-400 text-xs">
            Adobe Illustrator, Photoshop, and every font on your computer uses these.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 border border-purple-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Spirals</h4>
          <MathBlock>{`r = ae^{b\\theta}`}</MathBlock>
          <p className="text-dark-200 mt-3 text-sm">
            The logarithmic spiral appears in nautilus shells, galaxies, and Renaissance
            art. Its derivative maintains the same angle—a property called self-similarity.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-emerald-300 mb-3">Minimal Surfaces</h4>
          <p className="text-dark-200 text-sm mb-2">
            Soap bubbles form shapes that minimize surface area—solutions to calculus of
            variations problems. Architects like Frei Otto used these for stunning structures.
          </p>
        </div>
      </div>

      {/* Computer Graphics */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Computer Graphics and Animation</h2>

      <p className="text-dark-200 mb-6">
        Every Pixar movie, every video game, every CGI effect relies on calculus:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">💡</span>
          <div>
            <p className="font-semibold">Lighting and Shading</p>
            <p className="text-sm text-dark-400">
              The rendering equation—how light bounces around a scene—is an integral equation.
              Solving it gives photorealistic images.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🌊</span>
          <div>
            <p className="font-semibold">Fluid Simulation</p>
            <p className="text-sm text-dark-400">
              Water, smoke, fire—all simulated by solving the Navier-Stokes equations, a
              system of partial differential equations.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">👤</span>
          <div>
            <p className="font-semibold">Character Animation</p>
            <p className="text-sm text-dark-400">
              Smooth motion requires spline curves with continuous derivatives—ensuring
              characters don't move jerkily.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start p-4 bg-dark-800 rounded-lg">
          <span className="text-2xl">🧵</span>
          <div>
            <p className="font-semibold">Cloth and Hair</p>
            <p className="text-sm text-dark-400">
              Simulating fabric draping or hair flowing requires solving differential
              equations for each strand or mesh point.
            </p>
          </div>
        </div>
      </div>

      {/* Photography */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Photography and Image Processing</h2>

      <p className="text-dark-200 mb-6">
        Every digital photo you take is processed using calculus-based algorithms:
      </p>

      <CardGrid>
        <Card>
          <CardHeader title="Edge Detection" />
          <p className="text-sm text-dark-300">
            Finding edges in images uses derivatives—specifically, the gradient{' '}
            <MathInline>{'\\nabla I'}</MathInline>. Where the image intensity changes rapidly,
            there's an edge.
          </p>
        </Card>
        <Card>
          <CardHeader title="Blur and Sharpening" />
          <p className="text-sm text-dark-300">
            Gaussian blur is convolution with a function. Sharpening uses the Laplacian{' '}
            <MathInline>{'\\nabla^2 I'}</MathInline>—second derivatives that detect edges.
          </p>
        </Card>
        <Card>
          <CardHeader title="JPEG Compression" />
          <p className="text-sm text-dark-300">
            JPEG uses the discrete cosine transform—a discrete analog of Fourier analysis—to
            compress images by discarding high-frequency details.
          </p>
        </Card>
        <Card>
          <CardHeader title="Lens Correction" />
          <p className="text-sm text-dark-300">
            Camera lenses distort images. Correction algorithms use polynomial approximations
            and their derivatives to unwarp photos.
          </p>
        </Card>
      </CardGrid>

      {/* Architecture */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Architecture and Design</h2>

      <p className="text-dark-200 mb-6">
        From Gothic cathedrals to modern parametric design, calculus shapes our built environment:
      </p>

      <div className="bg-dark-800 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400">•</span>
            <span><strong>Structural analysis:</strong> Will this beam support the load? Calculus answers through stress and strain equations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400">•</span>
            <span><strong>Curved surfaces:</strong> Gehry's swooping buildings are defined by NURBS—Non-Uniform Rational B-Splines, a calculus-based curve representation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400">•</span>
            <span><strong>Acoustics:</strong> Concert hall design requires solving the wave equation to control how sound reflects and diffuses.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400">•</span>
            <span><strong>Climate control:</strong> HVAC systems model heat flow using the heat equation to keep buildings comfortable.</span>
          </li>
        </ul>
      </div>

      <Callout type="warning">
        <p>
          <strong>Hidden Mathematics:</strong> Most artists and musicians don't consciously
          use calculus—but the tools they rely on are built from it. The math becomes
          invisible infrastructure, enabling creativity without requiring explicit calculation.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Sound is governed by the wave equation; Fourier analysis decomposes any sound into pure frequencies.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Beautiful curves—from catenary arches to Bézier curves—are defined mathematically using calculus.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Computer graphics—lighting, animation, simulation—relies on solving differential equations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Even when artists don't know calculus, their digital tools are built on it.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
