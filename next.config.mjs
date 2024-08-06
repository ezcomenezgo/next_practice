/*
 * @Author:Claire Li
 * @Date:2024-07-06 17:56:38
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 15:45:32
 * @Description:
 */
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
