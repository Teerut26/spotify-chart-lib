import axios, { AxiosStatic } from "axios";

class HttpRequest {
     private axios: AxiosStatic = axios;

     constructor() {
          this.axios.create({
               headers: {
                    authority: "spotifycharts.com",
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "th-TH,th;q=0.9,en;q=0.8,ja;q=0.7",
                    "cache-control": "max-age=0",
                    cookie: "_ga=GA1.2.793390093.1649143892; _gid=GA1.2.998126571.1649262310; X-Mapping-kjhgfmmm=013AB6FA071E8BD64088A4AE1B4527AD; cf_chl_rc_ni=1; cf_chl_2=83498ac66ff142f; cf_chl_prog=x12; XSRF-TOKEN=eyJpdiI6Ijh2Q29CYXpzTWxIMFlEZk0rZWNQbmc9PSIsInZhbHVlIjoiem1tSW5RbTJMR0pteE4zcDBkb0k2VHlhNGFkdUdCRjJsMVF0c0hcL3JzdkZ6TkhrT1M1ZkNCVHN1UTBZZjlQeHFCeEZjN0w1Y2hkVVgrV01SRWpIcmZRPT0iLCJtYWMiOiI2MTExYWYxMjZjN2QwYmI1ZDYxYTUxY2FhN2VmYWYyYzg4ZTYxMDQzN2I3OWYxNzE4NDQzOTc1MTExMmUxMDcyIn0%3D; laravel_session=eyJpdiI6Ijc1ellEZ0FTKzdkdjVTd0Y1RXhjSWc9PSIsInZhbHVlIjoiNGljdVNZMzd4WDZpSTlVMmgyeUtYNkZXXC95Q2xjSUppUG9zMmQwcnBtNWVYWEc5dStpN1ZUeU84RlNmVFlHNjVQbXZvMXkyM29FU1JYSTlzcHhkNit3PT0iLCJtYWMiOiJlZjVhZDBjZWNhZjAwZjgyODY2NjY1MWVmMTc1NTFlMmJlNjc3MGM3MGRiOTJiOWE0YjJkY2YwNjk0ZTZiNDRjIn0%3D; c9884b2914e75551c5465f8bf3b4fdb0cf866e4d=eyJpdiI6ImNkcFQySXlabjZ4ZmR1U0gyQnBlU3c9PSIsInZhbHVlIjoibEUzTUZDUTYxRmY5QThsWGxTQVI1MnhzUk9UWUlvdFpPeFwvcHB3OXFuU0daNkZlRHZaamNEUTFjSCtUMzVYUExSNFZDclpYY0h4ODkyak00ODRSV2FaaGN0N1cxcW5sSmlFM1pEMVFOcHZxemsrRGhNeTFmUHh0V0RrNU5VRWdHdkdLSnNuSkxDaWxCdVhlQTVvQWwwWUxaWHJ5cExlUm5ZalBYc0N0dlRZRVA4T21tV0RNM0JIRVYzYVYxOG1OWUdRMHJXYTJ5dlwvY2Jjb0tTY0llTEVXNmduWVUybkNpY3lJa3dqZUhzT0ptXC80MWVKQlgxWnEwNzBnUEdkMkExK3hXYVdXTFVCeW9UZWVEcmR1ZStiU1FtY3k2RTM3b09KMktoMDE2cVc4WVFOZG9idnEzZVA0bHhKYmJTeWtDR3VMRW5OSGplRGFKdWRZaXRGRDdTd1k1Z1pQQWhHa0hGRlNKVFlGb255RkREcHIraVwvbGZMUk5QdmMzNDV6N3o3OTd1OWdaNEZvZzM1akV2UUN6bWdsS05BdG94WUlORE0ycE5iXC9MdEJMcU5ubENRcW1sOEIyN3J1NkV5OGp0QmdVaDNka0ZsSGc5NTQ2V1hvNzVGS2tSUT09IiwibWFjIjoiMTIxNzU5ZmJmMjQ1MTVlMDQ2ODlhZmI4ZjVkODgwM2E1ZjhmOTBmMDhkNjc4ZWQ3NzY0YzA4YWJjZTFkMDM2YyJ9; _gat_UA-31793-90=1; XSRF-TOKEN=eyJpdiI6IjcyN1Q2dHlpTFdIZ1VwS2FYaXMydUE9PSIsInZhbHVlIjoiN3FLSlpQdHhoUHd0R0JHaW95c1wvcHh5cFlcL05LQnhxeUhjUEM3VnUzZlFDbmRvbDc0VGhoRkhMSE9CdFhtb1YyWE0zb1JFcDNraWlZR3RHTUhaWWFEQT09IiwibWFjIjoiMDhjMzNjNGRmMjk1OThiMzVlZWY3MWMwNTA3M2FjYTc5MDc0YjNiNWJjNDY2NWE2MTg2ZjkwZjhhYzk0NDQ5ZCJ9; c9884b2914e75551c5465f8bf3b4fdb0cf866e4d=eyJpdiI6ImtINkhhK2pDSEhZcUFtZnNCUkVrWGc9PSIsInZhbHVlIjoiUjNvcm5OWnR0T2YzeWVoVis2bHkzZFwvbmp3U2FKSzhONk9GK01XSDgrMVF6RkpoUnNyN2pGWGFFbnNvS0pwT1B6SmxEWjZ1RzNjVk9oblgrM0JYT1EwN2NvSEh0UUswN1dVWFA4WDJXTXdXOGNyN3BuZjd5YyszMGVKdExaVTVaMThxb0dBMVQySnNHQ1BZWjJXOUdJUlZNWk0zRVlzT2VZUHV2a0c0MTh4YXV1WG9VRnRZZ1ZobmtLTE90UEROamJrSVNiOXpLYzZ6dnM4ZEhBMXVBRXBmYzV3Ykc1TUxPU2tnanU2c2RoeUJYbm9WZTl5bnBBcmNjbTJINUFhMGs3Vnk2MDc0Slpzb1UrYzRQZmN2K0xhNVdsWVRQSVJBK2haQnJ5cnpoNXNDbmtLSVg1OUdnVUVzejhiZXh2YllEY1BCeFJ6RmlGZTBpWFczZVVjWjZcL0VkMUlUbUpNZ3o3OEE5TWFSaUFwMkZDRDV1STdLUHhTSWtSZlwvTlh0QlFnaTdMUTR2aDZCQm44YXJ3NTBkbTM0YzF5ekxiRTNxam5IM3Jkb0FBUWpxVDkwd01CWkJcL21GN3V2MDNFZUo5MVJ2Q1c3akRjR1VWVTJhamhOWnZvaUNBPT0iLCJtYWMiOiI3OGRjMmFlYzkxOTI3YWIwMmUxZmQ4ZjczYWRjZjYzZjg1YzFlMjVmMGQ0NTZhNGFkMWU2NThmZjkxZmEzMjdlIn0%3D",
                    referer: "https://www.google.com/",
                    "sec-ch-ua":
                         '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"Windows"',
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "cross-site",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    "user-agent":
                         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
               },
          });
     }

     public get(url: string) {
          return this.axios.get(url);
     }
}

export default HttpRequest;
