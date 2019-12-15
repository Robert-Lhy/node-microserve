/**
 * POST: 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的创建和/或已有资源的修改。
 * GET: 向特定的资源发出请求。
 * PATCH: 实体中包含一个表，表中说明与该URI所表示的原内容的区别。
 * DELETE: 请求服务器删除Request-URI所标识的资源。
 * PUT: 向指定资源位置上传其最新内容。
 * @export
 * @enum {number}
 */
enum RequestTypes {
  POST,
  GET,
  PATCH,
  DELETE,
  UPDATE,
  PUT
}
export default RequestTypes
