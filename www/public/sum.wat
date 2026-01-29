;; (module
;;   (type (;0;) (func (param i32 i32) (result i32)))
;;   (func $sum (type 0) (param $a i32) (param $b i32) (result i32)
;;     local.get $a
;;     local.get $b
;;     i32.add)
;;   (export "sum" (func $sum)))

(module
  (import "console" "log" (func $mylog))
  (import "console" "error" (func $error))
  (memory $mem 1) ;; this is the same as 1 page = 64KB
  (data (i32.const 0) "Sup yall, this is WebAssembly!")
  (func $sum (param $a i32)(param $b i32) (result i32)
      call $mylog
      call $error
      local.get $a
      local.get $b
      i32.add
  )
  (export "memory" (memory $mem))
  (export "sum" (func $sum))
)

;;We can create memory in WebAssembly and export it to JS
;;We can create memory in JS and import it to WebAssembly