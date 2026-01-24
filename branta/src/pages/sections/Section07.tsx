import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Environments</h2>

      <p className="mb-4">
        Branta provides two separate environments for different stages of development and
        production use. Understanding when to use each environment is crucial for proper
        integration and testing.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Available Environments</h3>

      <Definition title="Staging Environment">
        A pre-production environment for development, testing, and integration work.
        Staging mirrors production behavior but uses separate data and API keys.
        <div className="mt-2 font-mono text-sm">
          Base URL: <code>https://staging.branta.pro/</code>
        </div>
      </Definition>

      <Definition title="Production Environment">
        The live environment for consumer-facing applications. Production handles real
        merchant registrations and customer verifications.
        <div className="mt-2 font-mono text-sm">
          Base URL: <code>https://guardrail.branta.pro/</code>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Environment Isolation</h3>

      <p className="mb-4">
        Staging and Production are completely isolated from each other:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Separate databases</strong> - No data is shared between environments</li>
        <li><strong>Separate API keys</strong> - Keys from one environment don't work in the other</li>
        <li><strong>Separate registrations</strong> - Addresses must be registered in each environment</li>
        <li><strong>Identical behavior</strong> - Both environments run the same code</li>
      </ul>

      <Callout type="info" title="Data Isolation">
        A payment registered in staging will NOT be verifiable in production, and vice versa.
        Make sure you're using the correct environment for your use case.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When to Use Staging</h3>

      <p className="mb-4">
        Use the staging environment for:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Initial development</strong> - Building and testing your integration</li>
        <li><strong>CI/CD pipelines</strong> - Automated testing in deployment workflows</li>
        <li><strong>Load testing</strong> - Stress testing your integration without affecting production</li>
        <li><strong>Integration testing</strong> - End-to-end tests with test data</li>
        <li><strong>Demo environments</strong> - Showcasing functionality without real data</li>
      </ul>

      <Example title="Development Workflow">
        <ol className="list-decimal list-inside space-y-2">
          <li>Obtain staging API key from Branta</li>
          <li>Configure your development environment to use staging URL</li>
          <li>Register test payment addresses</li>
          <li>Build and test verification flow</li>
          <li>Run automated tests against staging</li>
          <li>Once verified, switch to production</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When to Use Production</h3>

      <p className="mb-4">
        Use the production environment for:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Live merchant applications</strong> - Real customer-facing payment flows</li>
        <li><strong>Customer verification</strong> - End-users verifying real payment addresses</li>
        <li><strong>Production deployments</strong> - Any environment serving real customers</li>
      </ul>

      <Callout type="warning" title="Production Best Practices">
        <ul className="list-disc list-inside space-y-1">
          <li>Never use production API keys in development or test environments</li>
          <li>Rotate production keys if they may have been exposed</li>
          <li>Monitor API usage for anomalies</li>
          <li>Test all changes in staging before deploying to production</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">API Endpoints by Environment</h3>

      <Example title="Staging Endpoints">
        <div className="font-mono text-sm space-y-1">
          <p>POST https://staging.branta.pro/v1/payments</p>
          <p>GET  https://staging.branta.pro/v1/payments/{'{payment_string}'}</p>
          <p>Web: https://staging.branta.pro/v1/verify/address</p>
        </div>
      </Example>

      <Example title="Production Endpoints">
        <div className="font-mono text-sm space-y-1">
          <p>POST https://guardrail.branta.pro/v1/payments</p>
          <p>GET  https://guardrail.branta.pro/v1/payments/{'{payment_string}'}</p>
          <p>Web: https://guardrail.branta.pro/v1/verify/address</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Configuration Management</h3>

      <p className="mb-4">
        Best practices for managing environment configuration:
      </p>

      <Example title="Environment Variables">
        <div className="font-mono text-sm space-y-2">
          <p className="text-dark-400"># Development/.env.development</p>
          <p>BRANTA_API_URL=https://staging.branta.pro</p>
          <p>BRANTA_API_KEY=sk_staging_xxxx</p>
          <p className="mt-4 text-dark-400"># Production/.env.production</p>
          <p>BRANTA_API_URL=https://guardrail.branta.pro</p>
          <p>BRANTA_API_KEY=sk_live_xxxx</p>
        </div>
      </Example>

      <p className="mb-4">
        Key configuration principles:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Never hardcode URLs</strong> - Use environment variables</li>
        <li><strong>Separate key storage</strong> - Different keys for each environment</li>
        <li><strong>Validate on startup</strong> - Check that the correct environment is configured</li>
        <li><strong>Log the environment</strong> - Make it clear which environment is in use</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transitioning to Production</h3>

      <p className="mb-4">
        Before moving from staging to production, ensure:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Integration tested</strong> - All flows work correctly in staging</li>
        <li><strong>Error handling</strong> - Your app handles API errors gracefully</li>
        <li><strong>Key security</strong> - Production keys are securely stored</li>
        <li><strong>Monitoring</strong> - You can observe API calls and responses</li>
        <li><strong>Rollback plan</strong> - You can revert if issues arise</li>
      </ol>

      <Callout type="success" title="Environment Parity">
        Staging and Production have identical behavior. If something works in staging, it
        will work the same way in production. This makes staging a reliable preview of
        production behavior.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Rate Limits and Quotas</h3>

      <p className="mb-4">
        Both environments have rate limits to prevent abuse:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Rate limits are applied per API key</li>
        <li>Staging may have more generous limits for testing</li>
        <li>Contact Branta if you need higher production limits</li>
        <li>Implement exponential backoff for rate limit responses</li>
      </ul>

      <p className="mb-4">
        When you hit a rate limit, the API returns a 429 response with a Retry-After header
        indicating when you can retry.
      </p>
    </LessonLayout>
  );
}
