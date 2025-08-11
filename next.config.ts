import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // https://sass-lang.com/documentation/breaking-changes/mixed-decls/#silencing-deprecations-in-dependencies
  sassOptions: {
    quietDeps: true
  }
};

export default nextConfig;
