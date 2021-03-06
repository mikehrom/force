import { NextFunction } from "express"
import { ArtsyRequest, ArtsyResponse } from "lib/middleware/artsyExpress"
import qs from "qs"
const runningTests = require("./running_tests.coffee")
const SplitTest = require("./server_split_test.coffee")

export function splitTestMiddleware(
  req: Partial<ArtsyRequest>,
  res: Partial<ArtsyResponse>,
  next: NextFunction
) {
  for (const key in runningTests) {
    const configuration = runningTests[key]
    const name = key.toUpperCase()
    if (!res.locals.sd[name]) {
      const test = new SplitTest(req, res, configuration)
      res.locals.sd[name] = test.outcome()
    }
  }

  const queryParams = req.query?.split_test

  if (queryParams) {
    const params = qs.parse(queryParams)
    for (const key in params) {
      const test = new SplitTest(req, res, runningTests[key])
      const value = params[key]
      test.set(value)
      res.locals.sd[key.toUpperCase()] = value
    }
  }

  next()
}
